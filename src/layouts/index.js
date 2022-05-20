import { useContext } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "../modules/Header";
import { AppContext } from "../context/AppContext";
import { getContrastColor } from "../utils";

const Layout = ({ children, ...rest }) => {
  const { bgColor } = useContext(AppContext);
  const textColor = getContrastColor(bgColor);

  return (
    <Box
      h="100vh"
      w="100%"
      bgColor={bgColor}
      color={textColor}
      {...rest}
      overflow="hidden"
    >
      <Header
        position="fixed"
        h={16}
        top={0}
        left={0}
        m={0}
        bg="white"
        w="full"
        boxShadow="md"
      />
      <Container
        mt={16}
        py={{ base: 4, md: 16, lg: 32 }}
        px={{ base: 4, md: 32 }}
        maxW={{ md: "container.md", lg: "container.lg" }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
