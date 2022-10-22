import {
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { API, withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
import MobileDeIncrement from "../../../components/MobileDeIncrement";
import Ratings from "../../../components/Ratings";
import { deleteProduct } from "../../../src/graphql/mutations";
import { getProduct, listProducts } from "../../../src/graphql/queries";

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
  const { data } = await SSR.API.graphql({
    query: getProduct,
    variables: {
      id: params.id,
    },
  });

  return {
    props: {
      product: data.getProduct,
    },
    revalidate: 60,
  };
}

export default function Product({ product }) {
  const router = useRouter();
  async function handleDelete(product) {
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: deleteProduct,
        variables: {
          input: { id: product.id },
        },
      });
      router.push("/");
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }
  if (router.isFallback) {
    return (
      <div>
        <h1>Loading&hellip;</h1>
      </div>
    );
  }
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 6,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <Flex sx={{ flexDirection: "row", mx: "auto", w: "70vw", p: "2rem" }}>
      <Image
        src="/uliana-kopanytsia-BHOv_mdf4Bo-unsplash.jpg"
        w="auto"
        h="500"
        p="2"
      />
      <Flex
        sx={{
          flexDirection: "column",
          ml: "5",
          p: "2",
          justifyContent: "space-between",
        }}
      >
        <Heading as="h1" size="xl">
          {product.name}
        </Heading>
        <Text fontSize="lg" fontWeight={"black"}>
          $ {parseFloat(product.price).toFixed(2)}
        </Text>
        <br />
        <Ratings />
        <Spacer />
        <Text my={5} maxH="15rem" overflow="hidden">
        {product.desc}
        </Text>
        <Spacer />
        <MobileDeIncrement inc={inc} dec={dec} input={input} />
        <Button
          sx={{
            mt: "2",
            w: "100%",
            border: "2px solid teal",
            borderRadius: "none",
          }}
        >
          ADD TO CART
        </Button>
      </Flex>
    </Flex>
  );
}
