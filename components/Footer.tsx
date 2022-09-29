import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import {
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { SiHashnode } from "react-icons/si";
import { FaDev } from "react-icons/fa";

export default function Footer() {
  return (
    <Box h="100vh">
      <Flex
        sx={{
          w: "100%",
          flexDirection: "column",
          p: "2rem",
          justifyContent: "space-between",
          h: "100%",
        }}
      >
        <Heading>Cosmotics</Heading>
        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            h: "100%",
            fontSize: "1.2rem",
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              h: "100%",
              fontSize: "1.2rem",
            }}
          >
            <NextLink href="/trending" passHref>
              <Link>Trending</Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link>About</Link>
            </NextLink>
            <NextLink href="/contacts" passHref>
              <Link>Contacts</Link>
            </NextLink>
            <NextLink href="/contacts" passHref>
              <Link>AWS Amplify</Link>
            </NextLink>
            <NextLink href="/contacts" passHref>
              <Link>Star on Github</Link>
            </NextLink>
          </Flex>
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "end",
              h: "100%",
              fontSize: "1.5rem",
            }}
          >
            <RiTwitterLine />
            <SiHashnode />
            <RiInstagramLine />
            <FaDev />
            <RiLinkedinBoxFill />
            <RiGithubFill />
          </Flex>
        </Flex>
        <Text align="center">Made with ❤️ By Arjun Singh Lubana</Text>
      </Flex>
    </Box>
  );
}
