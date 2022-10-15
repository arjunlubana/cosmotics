import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { API, withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
import { RiStarSmileFill } from "react-icons/ri";
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
    <Flex sx={{ flexDirection: "row", mx: "auto", w: "70%", p: "2rem" }}>
      <Image
        src="/uliana-kopanytsia-BHOv_mdf4Bo-unsplash.jpg"
        w="auto"
        h="500"
        p="2"
      />
      <Box p="2">
        <Heading as="h1" size="xl">
          {product.name}
        </Heading>
        <br />
        <Text fontSize="md" fontWeight={"black"}>
          $ {parseFloat(product.price).toFixed(2)}
        </Text>
        <br />
        <Flex sx={{ fontSize: "1.2rem" }}>
          <RiStarSmileFill />
          <RiStarSmileFill />
          <RiStarSmileFill />
          <RiStarSmileFill />
          <RiStarSmileFill />
          <Text>10 Reviews</Text>
        </Flex>
        <Text>{product.desc}</Text>
        <HStack maxW="320px">
          <Text>Quantity</Text>
          <Button {...inc} size="sm">
            +
          </Button>
          <Input {...input} size="sm" />
          <Button {...dec} size="sm">
            -
          </Button>
        </HStack>
        <Button>ADD TO CART</Button>
      </Box>
    </Flex>
  );
}
