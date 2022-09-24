import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Select,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  InputLeftAddon,
  InputGroup,
  Textarea,
  InputRightAddon,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AddCategory from "../../src/components/AddCategory";
import Header from "../../src/components/Header";

type Inputs = {
  name: string;
  desc: string;
  category: string;
  price: number;
};

export default function NewProduct() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onAddProduct: SubmitHandler<Inputs> = (data) =>
    alert(JSON.stringify(data));

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onAddProduct)}>
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

        <FormControl>
          <FormLabel>Product Category</FormLabel>
          <InputGroup size="sm">
            <Select defaultValue="Select" {...register("category")}>
              <option>Face</option>
              <option>Skin</option>
              <option>Hair</option>
              <option>Nails</option>
            </Select>
            <InputRightAddon
              p="0"
              children={<Button onClick={onOpen}>New Category</Button>}
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Price</FormLabel>
          <InputGroup>
            <InputLeftAddon children="$" />
            <NumberInput defaultValue={5} precision={2} step={0.1}>
              <NumberInputField {...register("price")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </InputGroup>
        </FormControl>

        <Button mt={4} type="submit">
          Add
        </Button>
      </form>
      <AddCategory isOpen={isOpen} onClose={onClose} />
    </>
  );
}
