import Header from "../components/header/Header";
import React from "react";
import Footer from "../components/footer/Footer";

type MainLayoutProps = {
  children: JSX.Element;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
