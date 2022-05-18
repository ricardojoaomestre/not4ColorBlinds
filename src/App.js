import { useEffect, useState } from "react";
import { randomColorRgb, rgbToHex, hexToRgb, distPercentage } from "./utils";
import { Grid, Button, Flex, Text, Heading, VStack } from "@chakra-ui/react";
import ColorPicker from "./ColorPicker";

export default function App() {
  const [bgColor, setBgColor] = useState({ r: 0, g: 0, b: 0 });
  const [color, setColor] = useState("#ffffff");
  const [score, setScore] = useState(null);
  useEffect(() => {
    setBgColor(randomColorRgb());
  }, []);

  const showScore = () => {
    const rgbColor = hexToRgb(color);
    setScore(distPercentage(bgColor, rgbColor));
  };

  return (
    <Grid w="100%" h="100vh">
      {!score ? (
        <Flex align="center" justify="center" bgColor={rgbToHex(bgColor)}>
          <VStack spacing="8">
            <Heading fontSize="4em">Guess the color</Heading>
            <Text fontSize="sm" bg="white" px="6" py="4" borderRadius="6">
              Click on the button below to pick the closest color to the
              background of this page.
            </Text>
            <ColorPicker
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              Click here to pick a color
            </ColorPicker>
            <Button colorScheme="teal" onClick={showScore}>
              Guess
            </Button>
          </VStack>
        </Flex>
      ) : (
        <Grid alignItems="center">
          <VStack textAlign="center">
            <Text fontWeight="bold" fontSize="5em">
              <Text>Your score is:</Text>
              <Text>
                {Math.round(score)}%
                <span role="img" aria-labelledby="victory emoji">
                  {score > 80 ? "✌" : "👎"}️
                </span>
              </Text>
              <Button colorScheme="teal" onClick={() => setScore(null)}>
                Retry
              </Button>
            </Text>
          </VStack>
        </Grid>
      )}
    </Grid>
  );
}
