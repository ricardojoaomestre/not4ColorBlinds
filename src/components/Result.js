import { Button, Divider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { formatPercentage } from "../utils";

import ScoresList from "./ScoresList";
import ColorGradient from "./ColorGradient";

const Result = ({ submittedScore, targetColor, selectedColor, onReset }) => {
  return (
    <VStack gap={3} justifyContent={"center"}>
      <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>
        {formatPercentage(submittedScore)}
      </Text>

      <ColorGradient start={targetColor} end={selectedColor} />

      <Button variant={"outline"} colorScheme={"whatsapp"} onClick={onReset}>
        Try again
      </Button>
      <Divider />
      <ScoresList />
    </VStack>
  );
};

export default Result;
