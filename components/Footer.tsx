import { Flex, Heading, Text } from "@chakra-ui/react";
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
      <Flex
        sx={{
          w: "100%",
          flexDirection: "column",
          p: "2rem",
          justifyContent: "space-between",
          h: "100%",
        }}
      >
        <Heading textAlign={"center"}>Cosmotics</Heading>
          <Flex
            sx={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "end",
              h: "100%",
              fontSize: "1.5rem",
              my: 10
            }}
          >
            <RiTwitterLine />
            <SiHashnode />
            <RiInstagramLine />
            <FaDev />
            <RiLinkedinBoxFill />
            <RiGithubFill />
          </Flex>
        <Text align="center" mt="5">Made with ❤️ By A. Singh</Text>
      </Flex>
  );
}
