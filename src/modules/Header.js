import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Flex
      gap={8}
      justifyContent={{ base: "space-between", md: "flex-start" }}
      alignItems="center"
      px={8}
      fontSize={{ base: "md", md: "lg" }}
      {...props}
    >
      <Link to="/">Home</Link>

      <Link to="/scores">Scores</Link>
    </Flex>
  );
};

export default Header;
