import { Box, Text } from "@chakra-ui/react";
import React from "react";

const EmptyScores = () => {
  return (
    <Box>
      <Text fontSize={"2xl"} fontWeight={"semibold"}>
        No Scores!
      </Text>
    </Box>
  );
};

export default EmptyScores;
