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
      <Box display="flex" direction="row" mt={4} mb={8}>
        <ColorBox
          color={targetColor}
          mx={0}
          roundedTopRight={0}
          roundedBottomRight={0}
          h={24}
        />
        <ColorBox
          color={selectedColor}
          mx={0}
          roundedTopLeft={0}
          roundedBottomLeft={0}
          h={24}
        />
      </Box>
      <HexColorPicker color={selectedColor} onChange={setSelectedColor} />
      <Button colorScheme={"whatsapp"} width={"full"} onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default App;
