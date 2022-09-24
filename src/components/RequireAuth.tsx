// RequireAuth.js
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import "@aws-amplify/ui-react/styles.css";

import { useRouter } from "next/router";

export function RequireAuth({ mode, children }) {
  const router = useRouter();
  const { route } = useAuthenticator((context) => [context.route]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (route !== "authenticated") {
    if (mode === "auto") {
      return (
        <Modal
          isOpen={true}
          onClose={() => {
            onClose();
            router.push("/");
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Identify Yourself First</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Authenticator />
            </ModalBody>
            <ModalFooter>Cosmotics</ModalFooter>
          </ModalContent>
        </Modal>
      );
    } else {
      return (
        <>
          <Button onClick={onOpen}>Login</Button>
          <Modal
            isOpen={isOpen}
            onClose={() => {
              onClose();
            }}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Identify Yourself First</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Authenticator />
              </ModalBody>
              <ModalFooter>Cosmotics</ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );
    }
  }
  return children;
}
