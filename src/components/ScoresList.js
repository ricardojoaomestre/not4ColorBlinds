import { Box, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { formatPercentage } from "../utils";
import EmptyScores from "./EmptyScores";
import ScoreRow from "./ScoreRow";

const HeaderCell = ({ children }) => (
  <Td>
    <Text textTransform={"capitalize"} fontSize={"lg"} fontWeight={"bold"}>
      {children}
    </Text>
  </Td>
);

const ScoresList = ({ scores }) => {
  if (!scores || scores.length === 0) {
    return <EmptyScores />;
  }

  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
            <HeaderCell>Date</HeaderCell>
            <HeaderCell>Result</HeaderCell>
            <HeaderCell>Score</HeaderCell>
          </Tr>
        </Thead>
        <Tbody>
          {scores.map((score, idx) => (
            <ScoreRow key={idx} {...score} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ScoresList;
