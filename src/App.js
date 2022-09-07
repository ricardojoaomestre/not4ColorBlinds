import { Box, Button, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import ColorBox from "./components/ColorBox";
import Result from "./components/Result";
import useScoreStorage from "./hooks/useScoreStorage";
import { distPercentage, randomColorRgb, rgbToHex } from "./utils/colorUtils";

const App = () => {
  const [targetColor, setTargetColor] = useState("#000000");
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [submittedScore, setSubmittedScore] = useState(null);
  const [, addScore] = useScoreStorage();

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

  if (submittedScore)
    return (
      <Result
        submittedScore={submittedScore}
        targetColor={targetColor}
        selectedColor={selectedColor}
        onReset={handleReset}
      />
    );

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
