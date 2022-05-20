import { Heading as H1, Text, Box } from "@chakra-ui/react";

const Heading = (props) => {
  return (
    <Box
      py={{ base: 2, lg: 0 }}
      textAlign={{ base: "center", lg: "left" }}
      {...props}
    >
      <H1 as="h1" fontSize={{ base: "32px", lg: "3em" }} mb={{ base: "1rem" }}>
        Guess the color
      </H1>
      <Text
        fontSize={{ base: "1rem", lg: "1.2rem" }}
        fontWeight={{ base: "normal", lg: "semibold" }}
      >
        Select as approximate color as you can from the background and click on
        the 'Get Score' button. Check how good your color perception is!
      </Text>
    </Box>
  );
};

export default Heading;
