import { Tr, Td, Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { formatPercentage } from "../utils";
import ColorBox from "./ColorBox";

const ColorBoxAbsolute = styled(ColorBox)`
  position: absolute;
  ${({ props }) => (props?.left ? "left: 0" : null)};
  ${({ props }) => (props?.right ? "right: 0" : null)};
`;

const ScoreRow = ({ date, score, targetColor, selectedColor }) => (
  <Tr>
    <Td>{new Date(date).toLocaleDateString()}</Td>
    <Td>{formatPercentage(score)}</Td>
    <Td>
      <Flex w={14} height={8} position={"relative"}>
        <ColorBoxAbsolute color={targetColor} circle left="0" />
        <ColorBoxAbsolute color={selectedColor} circle right="0" />
      </Flex>
    </Td>
  </Tr>
);

export default ScoreRow;
