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
import { RiCloseLine, RiMenuLine, RiShoppingCartLine } from "react-icons/ri";
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
        <Link href="/">Cosmotics</Link>
      </Heading>
      <Spacer />
      <IconButton
        color={"black"}
        colorScheme={"white"}
        aria-label="Menu"
        icon={<RiShoppingCartLine />}
        ref={btnRef}
        onClick={onOpen}
        sx={{ caretColor: "transparent", fontSize: "2em" }}
      />
      <IconButton
        color={"black"}
        colorScheme={"white"}
        aria-label="Menu"
        icon={<RiMenuLine />}
        ref={btnRef}
        onClick={onOpen}
        sx={{ caretColor: "transparent", fontSize: "2em" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            sx={{ caretColor: "transparent", m: "5px" }}
            fontSize="2em"
          >
            <RiCloseLine />
          </DrawerCloseButton>

          <DrawerHeader>
            <Link href="/">Cosmotics</Link>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              sx={{
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "start",
                h: "60%",
              }}
            >
              <NextLink href="/admin" passHref>
                <Link>Admin</Link>
              </NextLink>
              <NextLink href="/about" passHref>
                <Link>About</Link>
              </NextLink>
              <NextLink href="/contacts" passHref>
                <Link>AWS Amplify</Link>
              </NextLink>
              <NextLink href="/contacts" passHref>
                <Link>Star on Github</Link>
              </NextLink>
              <RequireAuth mode="manual">
                <Button onClick={signOut}>Logout</Button>
              </RequireAuth>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Text align="center">Made with ❤️ By Arjun Singh Lubana</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
