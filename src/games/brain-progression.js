import { checkAnswer, getRandomNumber, startGame } from "../index.js";
import readlineSync from "readline-sync";

const getRandomProgression = (min, max, stepMin, stepMax, length) => {
  const firstItem = getRandomNumber(max, min);
  const step = getRandomNumber(stepMax, stepMin);
  let i = 0;
  const result = [firstItem];
  while (i < length - 1) {
    result.push(result.at(-1) + step);
    i += 1;
  }
  return result;
};

const getAttempt = () => {
  const progressionLength = getRandomNumber(10, 5);
  const progression = getRandomProgression(1, 50, 2, 10, progressionLength);
  const emptyIndex = getRandomNumber(progressionLength - 1, 0);

  const correctResult = progression[emptyIndex];
  progression[emptyIndex] = "..";

  return checkAnswer(`${progression.join(" ")}`, String(correctResult));
};

export const brainProgression = () => {
  startGame(getAttempt, "What number is missing in the progression?");
};
