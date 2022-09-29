import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ProductCard({product}) {
  return (
    <Box p={5} m="1rem" shadow="md" borderWidth="1px" maxW="300px">
      <Image
        boxSize="300px"
        objectFit="cover"
        src="/uliana-kopanytsia-l4xsHZ_E0_8-unsplash.jpg"
        alt="Dan Abramov"
      />
      <Heading fontSize="xl" m={2}>
        <Link href={`product/${product.id}`}>{product.name}</Link>
      </Heading>
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text fontSize="md" m={2}>
          $ {product.price}
        </Text>
        <Button>Shop</Button>
      </Flex>
      <Text mt={4}>
        {product.desc}
      </Text>
    </Box>
  );
}
