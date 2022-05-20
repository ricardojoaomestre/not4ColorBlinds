import { useContext, useState } from "react";

import Layout from "./layouts";
import Heading from "./modules/Heading";
import ColorControl from "./modules/ColorControl";
import Score from "./modules/Score";
import { Grid, GridItem } from "@chakra-ui/react";

import { distPercentage } from "./utils";
import { AppContext } from "./context/AppContext";

const App = () => {
  const [score, setScore] = useState(null);

  const { bgColor, reset } = useContext(AppContext);

  const calculateScore = (color) => {
    setScore(distPercentage(bgColor, color));
  };

  if (score) {
    return (
      <Score
        value={score}
        onRetry={() => {
          reset();
          setScore(null);
        }}
      />
    );
  }

  return (
    <Layout>
      <Grid
        templateColumns={{ base: "1fr", lg: "60% auto" }}
        templateRows={{ base: "1fr" }}
        alignItems="center"
        justifyContent="center"
        gap={{ base: 4, lg: 8 }}
      >
        <GridItem alignSelf="flex-start">
          <Heading />
        </GridItem>
        <GridItem justifySelf="center">
          <ColorControl onSubmit={calculateScore} />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default App;
