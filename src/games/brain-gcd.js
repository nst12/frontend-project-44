import { startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  const maxNumber = Math.max(number1, number2);
  const minNumber = Math.min(number1, number2);

  if (maxNumber % minNumber === 0) {
    return minNumber;
  }

  for (let i = Math.floor(minNumber / 2); i >= 1; i -= 1) {
    if (maxNumber % i === 0 && minNumber % i === 0) {
      return i;
    }
  }

  return null;
};

const generateRound = () => {
  const number1 = getRandomNumber(100, 1);
  const number2 = getRandomNumber(100, 1);

  const question = `${number1} ${number2}`;
  const answer = `${getGCD(number1, number2)}`;

  return [question, answer];
};

const brainGcd = () => {
  startGame(generateRound, rules);
};

export default brainGcd;
