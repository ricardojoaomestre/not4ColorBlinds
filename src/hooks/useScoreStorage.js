import { orderScoresDesc } from "../utils";
import useLocalStorage from "./useLocalStorage";

const LOCAL_STORAGE_KEY = "scores";
const MAX_SCORES = 5;

const useScoreStorage = () => {
  const [scores, setScores] = useLocalStorage(LOCAL_STORAGE_KEY, []);

  const addValue = (score, targetColor, selectedColor) => {
    const value = {
      date: +new Date(),
      score,
      targetColor,
      selectedColor,
    };
    const orderedScores = orderScoresDesc([...scores, value]);
    console.log(orderedScores);
    if (orderedScores.length >= MAX_SCORES) {
      setScores(orderedScores.slice(0, MAX_SCORES));
    } else {
      setScores(orderedScores);
    }
  };

  return [scores, addValue];
};

export default useScoreStorage;
