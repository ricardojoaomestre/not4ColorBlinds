import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import ColorBox from "./components/ColorBox";
import ScoresList from "./components/ScoresList";
import useScoreStorage from "./hooks/useScoreStorage";
import { formatPercentage } from "./utils";
import { distPercentage, randomColorRgb, rgbToHex } from "./utils/colorUtils";

const App = () => {
  const [targetColor, setTargetColor] = useState("#000000");
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [submittedScore, setSubmittedScore] = useState(null);
  const [scores, addScore] = useScoreStorage();

  const reset = () => {
    const randomColor = rgbToHex(randomColorRgb());
    setTargetColor(randomColor);
  };

  useEffect(() => {
    reset();
  }, []);

  const handleSubmit = () => {
    const score = distPercentage(targetColor, selectedColor);
    setSubmittedScore(score);
    addScore(score, targetColor, selectedColor);
  };

  const handleReset = () => {
    reset();
    setSubmittedScore(null);
  };

  if (submittedScore) {
    return (
      <VStack gap={3} justifyContent={"center"}>
        <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>
          {formatPercentage(submittedScore)}
        </Text>

        <HStack>
          <Flex
            w="200px"
            h={"16"}
            bgGradient={`linear(to-r, ${targetColor}, ${selectedColor})`}
            justifyContent={"space-between"}
            alignItems="center"
            px={4}
          >
            <ColorBox color={targetColor} circle />
            <ColorBox color={selectedColor} circle />
          </Flex>
        </HStack>

        <Button
          variant={"outline"}
          colorScheme={"whatsapp"}
          onClick={handleReset}
        >
          Try again
        </Button>
        <Divider />
        <ScoresList scores={scores} />
      </VStack>
    );
  }

  return (
    <Box w="200px">
      <HexColorPicker color={selectedColor} onChange={setSelectedColor} />
      <HStack gap={1} my={4}>
        <ColorBox color={targetColor} />
        <ColorBox color={selectedColor} />
      </HStack>
      <Button colorScheme={"whatsapp"} width={"full"} onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default App;
