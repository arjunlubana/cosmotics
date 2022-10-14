import { Flex, IconButton } from "@chakra-ui/react";
import {
  RiNotification2Fill,
  RiSearch2Fill,
  RiShoppingCart2Fill,
} from "react-icons/ri";

export default function IconButtons() {
  return (
    <Flex
      sx={{
        caretColor: "transparent",
        direction: "row",
      }}
    >
      <IconButton
        variant="ghost"
        as="a"
        aria-label="Search Icon"
        icon={<RiSearch2Fill />}
        sx={{
          fontSize: "32px",
          mr: 1,
        }}
      />
      <IconButton
        variant="ghost"
        as="a"
        aria-label="Notification Icon"
        icon={<RiNotification2Fill />}
        sx={{
          fontSize: "32px",
          mr: 1,
        }}
      />
      <IconButton
        variant="ghost"
        as="a"
        aria-label="Notification Icon"
        icon={<RiShoppingCart2Fill />}
        sx={{
          fontSize: "32px",
          mr: 1,
        }}
      />
    </Flex>
  );
}
