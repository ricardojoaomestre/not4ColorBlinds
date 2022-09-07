export const formatPercentage = (number) => `${number.toFixed(2)}%`;

export const orderScoresDesc = (scores) => {
  const compareFn = (a, b) => b.score - a.score;

  return scores.sort(compareFn);
};
