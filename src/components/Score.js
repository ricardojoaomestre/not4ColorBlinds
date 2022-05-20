import { Text, Box } from "@chakra-ui/react";

const Score = ({ value, ...rest }) => {
  return (
    <Box {...rest}>
      <Text>{value}</Text>
    </Box>
  );
};

export default Score;
