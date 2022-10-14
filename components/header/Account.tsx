import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiAccountCircleFill } from "react-icons/ri";
import { RequireAuth } from "../RequireAuth";

export default function Account() {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <RequireAuth mode="manual">
      <Menu>
        <MenuButton
          as={IconButton}
          variant="ghost"
          aria-label="Account Icon"
          icon={<RiAccountCircleFill />}
          sx={{
            fontSize: "32px",
            mr: 1,
          }}
        >
          Profile
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>
              {" "}
              <NextLink href="/admin" passHref>
                <a>My Account</a>
              </NextLink>
            </MenuItem>
            <MenuItem>Payments </MenuItem>
            <Button
              variant="outline"
              onClick={signOut}
              sx={{
                ml: 3,
              }}
            >
              Logout
            </Button>
          </MenuGroup>
        </MenuList>
      </Menu>
    </RequireAuth>
  );
}
