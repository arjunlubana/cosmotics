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
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AddCategory from "../../components/AddCategory";
import Header from "../../components/Header";
import { createProduct } from "../../src/graphql/mutations";

import { withSSRContext } from "aws-amplify";
import { listProductCategories } from "../../src/graphql/queries";

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
    <Authenticator>
      <Header />
      <form onSubmit={handleSubmit(onAddProduct)}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input defaultValue="Product X" {...register("name")} />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Here is a dummy text to get you going ..."
            size="sm"
            {...register("desc")}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Product Category</FormLabel>
          <InputGroup size="sm">
            <Select defaultValue="Select" {...register("categoryId")}>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </Select>
            <InputRightAddon
              p="0"
              children={<Button onClick={onOpen}>New Category</Button>}
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Price</FormLabel>
          <InputGroup>
            <InputLeftAddon children="$" />
            <NumberInput defaultValue={5} precision={2} step={0.1}>
              <NumberInputField {...register("price")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </InputGroup>
        </FormControl>

        <Button mt={4} type="submit">
          Add
        </Button>
      </form>
      <AddCategory isOpen={isOpen} onClose={onClose} />
    </Authenticator>
  );
}
