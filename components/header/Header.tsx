import { Flex, Spacer } from "@chakra-ui/react";
import Account from "./Account";
import IconButtons from "./IconButtons";
import Logo from "./Logo";
import PageLinks from "./PageLinks";

export default function Header() {
  return (
    <Flex
      as="header"
      sx={{
        p: "1em",
        alignItems: "center",
        color: "teal",
      }}
    >
      <Logo />
      {/* Links */}
      <PageLinks />
      <Spacer />
      {/* Account Information */}
      <IconButtons />
      <Account />
    </Flex>
  );
}
