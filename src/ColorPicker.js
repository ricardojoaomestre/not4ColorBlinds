import { Text, Flex } from "@chakra-ui/react";

const ColorPicker = ({ children, value, onChange, ...rest }) => {
  return (
    <Flex
      boxShadow="base"
      p="6"
      rounded="md"
      minW="150px"
      h="100px"
      bg={value}
      pos="relative"
      alignItems="center"
      justify="center"
      _hover={{ pointer: "cursor" }}
      {...rest}
    >
      <Text fontWeight="semibold" fontSize="sm">
        {children}
      </Text>
      <input
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          opacity: "0"
        }}
        type="color"
        id="colorpicker"
        p="6"
        value={value}
        onChange={onChange}
      />
    </Flex>
  );
};

export default ColorPicker;
