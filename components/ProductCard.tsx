import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function ProductCard({ product, children }) {
  return (
    <Box p={5} m="1rem" shadow="md" borderWidth="1px" maxW="300px">
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Heading fontSize="xl" m={2}>
          <Link href={`product/${product.id}`}>{product.name}</Link>
        </Heading>
        <Text fontSize="xl" m={2} color="green" fontWeight={"bold"}>
          ${parseFloat(product.price).toFixed(2)}
        </Text>
      </Flex>
      <Text mt={4} h={100} sx={{ overflow: "hidden" }}>
        {product.desc}
      </Text>
      {children}
    </Box>
  );
}
