import { Text } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Text
      fontSize={["4xl", "4xl", "6xl"]}
      fontWeight={"extrabold"}
      letterSpacing={0}
      mb={[6, 8, 12]}
    >
      <Text as="span" color={"red.400"}>
        Not
      </Text>
      <Text as="span" color={"green.400"}>
        4
      </Text>
      <Text as="span" color={"blue.400"}>
        ColorBlinds
      </Text>
    </Text>
  );
};

export default Logo;
