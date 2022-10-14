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
import { API, withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import AddCategory from "../../../components/AddCategory";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { RequireAuth } from "../../../components/RequireAuth";
import { updateProduct } from "../../../src/graphql/mutations";
import {
  getProduct,
  listProductCategories,
  listProducts,
} from "../../../src/graphql/queries";

type Inputs = {
  name: string;
  desc: string;
  categoryId: string;
  price: number;
};

// Get all possible paths.
export async function getStaticPaths() {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({ query: listProducts });
  const paths = data.listProducts.items.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const SSR = withSSRContext();
  const response = await SSR.API.graphql({ query: listProductCategories });
  const { data } = await SSR.API.graphql({
    query: getProduct,
    variables: {
      id: params.id,
    },
  });

  return {
    props: {
      product: data.getProduct,
      categories: response.data.listProductCategories.items,
    },
    revalidate: 60,
  };
}

export default function UpdateProduct({ product, categories }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  async function handleUpdate(data) {
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: updateProduct,
        variables: {
          input: { ...data },
        },
      });
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }
  const onAddProduct: SubmitHandler<Inputs> = (data) => {
    handleUpdate({ id: product.id, ...data });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <RequireAuth mode="auto">
      <Header />
      <Flex sx={{ w: "90vw", mx: "auto", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(onAddProduct)} style={{ width: "100%" }}>
          <FormControl sx={{ m: 2 }}>
            <FormLabel>Name</FormLabel>
            <Input defaultValue={product.name} {...register("name")} />
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
              <NumberInput
                defaultValue={product.price}
                precision={2}
                step={0.1}
              >
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
              defaultValue={product.desc}
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
      <Footer />
    </RequireAuth>
  );
}
