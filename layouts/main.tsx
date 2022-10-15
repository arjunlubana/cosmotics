import Header from "../components/header/Header";
import React from "react";
import Footer from "../components/footer/Footer";
import { Box } from "@chakra-ui/react";

type MainLayoutProps = {
  children: JSX.Element;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <Box
        as={"main"}
        sx={{ mx: "auto", mb: "5rem", w: "80vw", }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
