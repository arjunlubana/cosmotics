import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import Ratings from "./Ratings";
export type ProductCardProps = {
  product: Product;
  children: React.ReactNode;
};

export default function ProductCard({ product, children }) {
  return (
    <Box p={5} m="1rem" shadow="md" borderWidth="1px" maxW="300px">
      <Image src="./uliana-kopanytsia-BHOv_mdf4Bo-unsplash.jpg" />
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          m: 2,
        }}
      >
        <NextLink href={`product/${product.id}`} passHref>
          <Heading as={"a"} fontSize="xl">
            {product.name}
          </Heading>
        </NextLink>
        <Text color="teal" fontWeight={"bold"} fontSize="md" mb="3">
          $ {parseFloat(product.price).toFixed(2)}
        </Text>
        <Ratings />
      </Flex>
      {children}
    </Box>
  );
}
