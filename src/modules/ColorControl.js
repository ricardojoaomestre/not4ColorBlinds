import { useContext } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { HexColorPicker } from "react-colorful";
import { AppContext } from "../context/AppContext";

const ColorControl = ({ onSubmit, ...rest }) => {
  const { selectedColor, setSelectedColor } = useContext(AppContext);

  return (
    <>
      <Flex
        gap={4}
        w="100%"
        flexDirection={{ base: "column", lg: "row" }}
        {...rest}
      >
        <HexColorPicker color={selectedColor} onChange={setSelectedColor} />
        <Box
          mt="0"
          w="200px"
          h={{ base: "5em", md: "200px" }}
          rounded="0.5rem"
          bgColor={selectedColor}
          alignItems="center"
          justifyContent="center"
          boxShadow="base"
        />
      </Flex>
      <Box textAlign="center">
        <Button
          w="full"
          colorScheme="blackAlpha"
          mt={{ base: 6 }}
          onClick={() => onSubmit(selectedColor)}
        >
          Guesss
        </Button>
      </Box>
    </>
  );
};

export default ColorControl;
