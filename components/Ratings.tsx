import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { RiStarFill } from "react-icons/ri";

export default function Ratings() {
  return (
    <Flex sx={{ alignItems: "center" }}>
      <Flex sx={{ fontSize: "1.2rem", color: "gold" }}>
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </Flex>
      <NextLink href={"/reviews"} passHref>
        <Link ml={2} fontSize={"0.8rem"}>
          10 Reviews
        </Link>
      </NextLink>
    </Flex>
  );
}
