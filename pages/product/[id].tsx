import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../../src/components/Header";
export default function product() {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Header />
      <Image
        src="/images/farah-samy-dkUK-V3OK9g-unsplash.jpg"
        alt="Some Image"
      />
      <Box sx={{ m: 2 }}>
        <Heading as="h1" size="xl">
          Some Heading
        </Heading>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text fontSize="xl">$ 30.00</Text>
          <Box>
            <Button>Shop</Button>
            <Button>Add to Cart</Button>
          </Box>
        </Flex>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni,
          impedit, sequi neque repudiandae molestiae possimus at ipsam totam
          illo doloribus similique officiis praesentium inventore fugit
          architecto quos obcaecati asperiores?
        </Text>
      </Box>
      <Box>
        <Link href="1/update">Update</Link>
      </Box>
    </Flex>
  );
}
