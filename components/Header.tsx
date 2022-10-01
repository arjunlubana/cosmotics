import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiCloseLine, RiMenuLine, RiAccountCircleLine } from "react-icons/ri";
import { RequireAuth } from "./RequireAuth";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <Flex sx={{ p: "1em" }}>
      <Heading>
        <NextLink href="/" passHref>
          <Link>Cosmotics</Link>
        </NextLink>
      </Heading>
      <Spacer />
      <NextLink href="/admin" passHref>
        <IconButton
          as="a"
          color={"white"}
          colorScheme={"teal"}
          aria-label="Menu"
          icon={<RiAccountCircleLine />}
          ref={btnRef}
          onClick={onOpen}
          sx={{ m: 1, caretColor: "transparent", fontSize: "2em" }}
        />
      </NextLink>
      <RequireAuth mode="manual">
        <Button onClick={signOut} m="1">
          Logout
        </Button>
      </RequireAuth>
    </Flex>
  );
}
