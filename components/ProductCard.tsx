import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
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
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Heading fontSize="xl" m={2}>
          <Link href={`product/${product.id}`}>{product.name}</Link>
        </Heading>
        <Text fontSize="xl" m={2} color="teal" fontWeight={"bold"}>
          ${parseFloat(product.price).toFixed(2)}
        </Text>
      </Flex>
      {children}
    </Box>
  );
}
