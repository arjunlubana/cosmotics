import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function PageLinks() {
  return (
    <Flex
      sx={{
        flexDirection: "row",
        fontSize: "1.1rem",
        h: "100%",
      }}
    >
      <NextLink href="/store/trending" passHref>
        <Link sx={{ ml: 5 }}>Trending</Link>
      </NextLink>

      <NextLink href="/store/shops" passHref>
        <Link sx={{ ml: 5 }}>Shops</Link>
      </NextLink>

      <NextLink href="/store/about" passHref>
        <Link sx={{ ml: 5 }}>About</Link>
      </NextLink>
    </Flex>
  );
}
