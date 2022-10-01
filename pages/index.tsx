import { Flex } from "@chakra-ui/react";
import { withSSRContext } from "aws-amplify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { listProducts } from "../src/graphql/queries";

export async function getStaticProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listProducts });
  return {
    props: {
      products: response.data.listProducts.items,
    },
  };
}

export default function Home({ products = [] }) {
  return (
    <>
      <Header />
      <Flex direction="column" mx="auto" mb="5rem" w="80vw">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}>
            {" "}
          </ProductCard>
        ))}
      </Flex>
      <Footer />
    </>
  );
}
