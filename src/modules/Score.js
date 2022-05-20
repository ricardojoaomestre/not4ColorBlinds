import { Text, Button } from "@chakra-ui/react";

const Score = ({ value, onRetry, ...rest }) => {
  return (
    <>
      <Text>{value}</Text>
      <Button onClick={onRetry}>Retry</Button>
    </>
  );
};

export default Score;
