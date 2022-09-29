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
import { API, withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AddCategory from "../../../components/AddCategory";
import Header from "../../../components/Header";
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
    <>
      <Header />
      <form onSubmit={handleSubmit(onAddProduct)}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input defaultValue={product.name} {...register("name")} />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            defaultValue={product.desc}
            size="sm"
            {...register("desc")}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Product Category</FormLabel>
          <InputGroup size="sm">
            <Select defaultValue="Select" {...register("categoryId")}>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
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
            <NumberInput defaultValue={product.price} precision={2} step={0.1}>
              <NumberInputField {...register("price")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </InputGroup>
        </FormControl>

        <Button mt={4} type="submit">
          Update
        </Button>
      </form>
      <AddCategory isOpen={isOpen} onClose={onClose} />
    </>
  );
}
