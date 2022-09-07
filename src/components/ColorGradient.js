import { Flex, HStack } from "@chakra-ui/react";
import React from "react";
import ColorBox from "./ColorBox";

const ColorGradient = ({ start, end }) => {
  return (
    <HStack>
      <Flex
        w="200px"
        h={"16"}
        bgGradient={`linear(to-r, ${start}, ${end})`}
        justifyContent={"space-between"}
        alignItems="center"
        px={4}
      >
        <ColorBox color={start} circle />
        <ColorBox color={end} circle />
      </Flex>
    </HStack>
  );
};

export default ColorGradient;
