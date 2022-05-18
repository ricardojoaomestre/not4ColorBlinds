import { useState } from "react";
import {
  randomColorRgb,
  rgbToHex,
  hexToRgb,
  distPercentage,
  getBrightness
} from "./utils";
import { Grid, Button, Flex, Text, Heading, Stack } from "@chakra-ui/react";
import { HexColorPicker } from "react-colorful";
export default function App() {
  const [color, setColor] = useState("#ffffff");
  const [score, setScore] = useState(null);
  const bgColor = randomColorRgb();
  const textColor =
    getBrightness(color) > 128 || color.a < 0.5 ? "#000" : "#FFF";

  const showScore = () => {
    const rgbColor = hexToRgb(color);
    setScore(distPercentage(bgColor, rgbColor));
  };

  return (
    <Grid w="100%" h="100vh">
      {!score ? (
        <Flex p={6} align="center" justify="center" bgColor={rgbToHex(bgColor)}>
          <Stack color={textColor}>
            <Heading as="h1" fontSize="4em">
              Guess the color
            </Heading>
            <Text fontSize="md" pb={4}>
              Select as approximate color as you can from the background and
              click on the 'Guess' button. Check your score of how close you
              were!
            </Text>
            <Flex gap="1rem" justifyContent="center" py={4}>
              <HexColorPicker color={color} onChange={setColor} />
              <Flex
                mt="0"
                w="200px"
                h="200px"
                rounded="0.5rem"
                bgColor={color}
                alignItems="center"
                justifyContent="center"
                boxShadow="base"
              >
                This is your color
              </Flex>
            </Flex>
            <Button
              colorScheme="teal"
              onClick={showScore}
              px={8}
              alignSelf="center"
            >
              Guess
            </Button>
          </Stack>
        </Flex>
      ) : (
        <Grid alignItems="center">
          <Stack textAlign="center">
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
          </Stack>
        </Grid>
      )}
    </Grid>
  );
}
