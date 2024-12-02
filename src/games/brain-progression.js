import { startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = (firstItem, step, length) => {
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

  const firstItem = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 10);
  const progression = getProgression(firstItem, step, progressionLength);
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
