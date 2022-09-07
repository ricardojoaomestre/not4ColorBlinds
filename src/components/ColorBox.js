import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const ColorBox = ({ color, circle = false, ...rest }) => {
  return circle ? (
    <Box
      rounded={"full"}
      bg={color}
      w={8}
      height={8}
      boxShadow={"base"}
      {...rest}
    />
  ) : (
    <Box
      w="100%"
      h={16}
      rounded={8}
      bgColor={color}
      boxShadow="base"
      {...rest}
    />
  );
};

ColorBox.prototype = {
  circle: PropTypes.bool,
  color: PropTypes.string.isRequired,
};

export default ColorBox;
