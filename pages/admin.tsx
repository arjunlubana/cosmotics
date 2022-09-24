import { Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "../src/components/Header";
import ProductCard from "../src/components/ProductCard";

export default function Admin() {
  return (
    <>
      <Header />
      <NextLink href="product/new" passHref>
        <Button as="a">Add New Product</Button>
      </NextLink>
      <Flex direction="column">
        <ProductCard />
      </Flex>
    </>
  );
}
