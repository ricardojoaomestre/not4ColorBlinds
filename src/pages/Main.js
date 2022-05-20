import { useState, useContext } from "react";
import { Grid, GridItem, Button } from "@chakra-ui/react";
import Layout from "../layouts";
import Heading from "../modules/Heading";
import ColorControl from "../modules/ColorControl";
import { AppContext } from "../context/AppContext";
import { distPercentage } from "../utils";

const MainPage = () => {
  const [score, setScore] = useState(null);

  const { bgColor, textColor, reset } = useContext(AppContext);

  const calculateScore = (color) => {
    setScore(distPercentage(bgColor, color));
  };

  if (score) {
    return (
      <>
        <p>{score}</p>
        <Button
          onClick={() => {
            reset();
            setScore(null);
          }}
        >
          Retry
        </Button>
      </>
    );
  }

  return (
    <Layout bgColor={bgColor} color={textColor}>
      <Grid
        templateColumns={{ base: "1fr", lg: "60% auto" }}
        templateRows={{ base: "1fr" }}
        alignItems="center"
        justifyContent="center"
        gap={{ base: 4, lg: 8 }}
        h="100%"
      >
        <GridItem>
          <Heading />
        </GridItem>
        <GridItem justifySelf="center">
          <ColorControl onSubmit={calculateScore} />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default MainPage;
