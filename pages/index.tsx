import { Heading, Stack } from "@chakra-ui/react";
import { withSSRContext } from "aws-amplify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Headline from "../components/Headline";
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
      <Headline />
      <Heading m="3">Explore</Heading>
      <Stack spacing={8} direction="row" m="3" mb="5rem">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Stack>
      <Footer />
    </>
  );
}
