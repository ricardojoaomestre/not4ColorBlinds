import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";

const Layout = ({ children }) => {
  return (
    <Container py={16} bgColor={"whitesmoke"} h={"100vh"}>
      <VStack gap={2}>
        <Logo />
        {children}
      </VStack>
    </Container>
  );
};

export default Layout;
