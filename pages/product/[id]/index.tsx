import { Box, Button, Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "../../../components/Header";
import { API, withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
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
  if (router.isFallback) {
    return (
      <div>
        <h1>Loading&hellip;</h1>
      </div>
    );
  }

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Header />
      <Image
        src="/images/farah-samy-dkUK-V3OK9g-unsplash.jpg"
        alt="Some Image"
      />
      <Box sx={{ m: 2 }}>
        <Heading as="h1" size="xl">
          {product.name}
        </Heading>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text fontSize="xl">$ 30.00</Text>
          <Box>
            <Button>Shop</Button>
            <Button>Add to Cart</Button>
          </Box>
        </Flex>
        <Text>
          {product.desc}
        </Text>
      </Box>
      <NextLink href={`${product.id}/update`} passHref>
        <Link>Update</Link>
      </NextLink>
    </Flex>
  );
}
