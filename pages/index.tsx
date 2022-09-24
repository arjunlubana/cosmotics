import { Heading, Stack } from "@chakra-ui/react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Headline from "../src/components/Headline";
import ProductCard from "../src/components/ProductCard";

export default function Home() {
  return (
    <>
      <Header />
      <Headline />
      <Heading m="3">Explore</Heading>
      <Stack spacing={8} direction="row" m="3" mb="5rem">
        <ProductCard />
      </Stack>
      <Footer />
    </>
  );
}
