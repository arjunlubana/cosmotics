import { Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo() {
  return (
    <Heading as="h1" size="lg">
      <NextLink href="/" passHref>
        <Link>Cosmotics</Link>
      </NextLink>
    </Heading>
  );
}
