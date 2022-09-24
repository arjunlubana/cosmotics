import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ProductCard() {
  return (
    <Box p={5} m="1rem" shadow="md" borderWidth="1px" maxW="300px">
      <Image
        boxSize="300px"
        objectFit="cover"
        src="/uliana-kopanytsia-l4xsHZ_E0_8-unsplash.jpg"
        alt="Dan Abramov"
      />
      <Heading fontSize="xl" m={2}>
        <Link href="product/1">Product X</Link>
      </Heading>
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text fontSize="md" m={2}>
          $ 30.00
        </Text>
        <Button>Shop</Button>
      </Flex>
      <Text mt={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        consequatur a earum cum rep
      </Text>
    </Box>
  );
}
