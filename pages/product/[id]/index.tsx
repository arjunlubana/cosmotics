import {
  Badge,
  Divider, Flex,
  Heading, Stack, Text
} from "@chakra-ui/react";
import { API, withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
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

  return (
    <>
      <Header />
      <Flex sx={{ flexDirection: "column", mx: "auto", w: "70%" }}>
        <Flex
          sx={{
            flexDirection: "row",
            my: "3",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Heading as="h1" size="xl">
            {product.name}
          </Heading>

          <Text fontSize="xl" color="green">
            ${parseFloat(product.price).toFixed(2)}
          </Text>
        </Flex>
        <Stack direction="row">
          {product.category.items.map((category) => (
            <Badge
              variant="subtle"
              colorScheme="teal"
              fontSize="1rem"
              px={4}
              py={0.1}
              borderRadius={10}
              textTransform="capitalize"
              m="2"
            >
              {category.name}
            </Badge>
          ))}
        </Stack>
        <Divider />
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "left",
            my: 2,
          }}
        >
          <Heading as="h2" size="sm" textAlign={"center"}>
            Description
          </Heading>
          <Text>{product.desc}</Text>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
