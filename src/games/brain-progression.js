import { startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const rules = {
  firstQuestion: 'What number is missing in the progression?',
};

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

const generateRound = () => {
  const progressionLength = getRandomNumber(10, 5);
  const progression = getRandomProgression(1, 50, 2, 10, progressionLength);
  const emptyIndex = getRandomNumber(progressionLength - 1, 0);

  const answer = `${progression[emptyIndex]}`;
  progression[emptyIndex] = '..';
  const question = `${progression.join(' ')}`;

  return [question, answer];
};

const brainProgression = () => {
  startGame(generateRound, rules);
};

export default brainProgression;
