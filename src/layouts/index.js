import { Flex, Container } from "@chakra-ui/react";
import Header from "../modules/Header";

const Layout = ({ children, ...rest }) => {
  return (
    <Flex h="100vh" w="100%" {...rest} overflow="hidden" direction="column">
      <Header h={16} m={0} bg="white" w="full" boxShadow="md" />
      <Container
        py={{ base: 4, md: 16, lg: 32 }}
        px={{ base: 4, md: 32 }}
        maxW={{ md: "container.md", lg: "container.lg" }}
        flex={1}
      >
        {children}
      </Container>
    </Flex>
  );
};

export default Layout;
