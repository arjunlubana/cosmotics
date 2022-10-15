import { Authenticator } from "@aws-amplify/ui-react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Select,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  InputLeftAddon,
  InputGroup,
  Textarea,
  InputRightAddon,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { withSSRContext } from "aws-amplify";
import AddCategory from "../../components/AddCategory";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { listProductCategories } from "../../src/graphql/queries";
import { createProduct } from "../../src/graphql/mutations";

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  try {
    const response = await SSR.API.graphql({ query: listProductCategories });
    return {
      props: {
        categories: response.data.listProductCategories.items,
      },
    };
  } catch (error) {
    return {
      props: {
        error: { error: "Something Bad" },
      },
    };
  }
}

type Inputs = {
  name: string;
  desc: string;
  categoryId: string;
  price: number;
};

export default function NewProduct({ categories }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onAddProduct: SubmitHandler<Inputs> = async (data) => {
    const result = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createProduct,
      variables: {
        input: {
          ...data,
        },
      },
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex sx={{ w: "90vw", mx: "auto", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(onAddProduct)} style={{ width: "100%" }}>
          <FormControl sx={{ m: 2 }}>
            <FormLabel>Name</FormLabel>
            <Input defaultValue="Product Cosmotics" {...register("name")} />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl sx={{ m: 2 }}>
            <FormLabel>Category</FormLabel>
            <InputGroup size="md">
              <Select defaultValue="Select" {...register("categoryId")}>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
              <InputRightAddon p="0" mx="2" backgroundColor={"transparent"}>
                <Button
                  onClick={onOpen}
                  mx="auto"
                  leftIcon={<AiOutlineAppstoreAdd fontSize={"2rem"} />}
                  colorScheme="teal"
                  variant="solid"
                  fontSize="md"
                  h="100%"
                  w="100%"
                >
                  Add
                </Button>
              </InputRightAddon>
            </InputGroup>
          </FormControl>

          <FormControl sx={{ m: 2 }}>
            <FormLabel>Price</FormLabel>
            <InputGroup colorScheme={"teal"}>
              <InputLeftAddon>$</InputLeftAddon>
              <NumberInput defaultValue="2" precision={2} step={0.1}>
                <NumberInputField {...register("price")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </InputGroup>
          </FormControl>
          <FormControl sx={{ m: 2 }}>
            <FormLabel>Description</FormLabel>
            <Textarea
              defaultValue=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quis
              commodi repellat velit eveniet? Consequatur dolores pariatur sequi id
              sapiente architecto laborios"
              size="sm"
              h="200"
              {...register("desc")}
            />
          </FormControl>
          <Button type="submit" colorScheme={"teal"} w="50%" mx={"2"} my="2rem">
            Update
          </Button>
        </form>
      </Flex>

      <AddCategory isOpen={isOpen} onClose={onClose} />
    </>
  );
}
