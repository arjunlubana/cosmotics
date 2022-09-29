import { Button, Flex, Link } from "@chakra-ui/react";
import { API, withSSRContext } from "aws-amplify";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { deleteProduct } from "../src/graphql/mutations";
import { listProducts } from "../src/graphql/queries";

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listProducts });
  return {
    props: {
      products: response.data.listProducts.items,
    },
  };
}

export default function Admin({ products }) {
  const router = useRouter()
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
  return (
    <>
      <Header />
      <NextLink href="product/new" passHref>
        <Button as="a">Add New Product</Button>
      </NextLink>
      {products.map((product) => (
        <Flex key={product.id} direction="column">
          <ProductCard product={product} />
          <Button onClick={() => handleDelete(product)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}
