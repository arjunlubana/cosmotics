import { Button, Flex, Input, Spacer, Text } from "@chakra-ui/react";

export default function MobileDeIncrement({ inc, dec, input }) {
  return (
    <Flex
      sx={{
        w: "100%",
        mt: 2,
      }}
    >
      <Text sx={{ fontWeight: "bold" }}>Quantity</Text>
      <Spacer />
      <Flex
        sx={{
          maxW: "150px",
        }}
      >
        <Button
          {...inc}
          size="sm"
          colorScheme="teal"
          sx={{ borderRadius: "none", mr: 2 }}
        >
          +
        </Button>
        <Input
          {...input}
          size="sm"
          fontWeight="bold"
          fontSize={"xl"}
          textAlign="center"
        />
        <Button
          {...dec}
          size="sm"
          colorScheme="teal"
          sx={{ borderRadius: "none", ml: 2 }}
        >
          -
        </Button>
      </Flex>
    </Flex>
  );
}
