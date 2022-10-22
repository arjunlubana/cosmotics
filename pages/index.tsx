import { Grid } from "@chakra-ui/react";
import { withSSRContext } from "aws-amplify";
import ProductCard from "../components/ProductCard";
import { listProducts } from "../src/graphql/queries";

export type Product = {
  id: String;
  name: String;
  desc: String;
  categoryId: String;
  price: String;
  created_at: String;
  modified_at: String;
  deleted_at: String;
  createdAt: String;
  updatedAt: String;
  owner: String;
};

export async function getStaticProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({
    query: listProducts,
  });
  console.log(response);
  return {
    props: {
      products: response.data.listProducts.items,
    },
  };
}

export default function Home({ products = [] }) {
  return (
    <Grid
      mx="auto"
      mb="5rem"
      w="80vw"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      sx={{
        gridRowGap: "2rem",
        fontSize: "28px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product}>
          {" "}
        </ProductCard>
      ))}
    </Grid>
  );
}
