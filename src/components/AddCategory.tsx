import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  desc: string;
};

export default function AddCategory({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onAddCategory: SubmitHandler<Inputs> = (data) =>
    alert(JSON.stringify(data));
  return (
    <>
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
            <form onSubmit={handleSubmit(onAddCategory)}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input defaultValue="Product X" {...register("name")} />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Here is a dummy text to get you going ..."
                  size="sm"
                  {...register("desc")}
                />
              </FormControl>
              <Button mt={4} isLoading={false} type="submit">
                Add
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>Cosmotics</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
