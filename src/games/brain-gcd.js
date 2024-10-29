import { checkAnswer, startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getGCD = (number1, number2) => {
  const maxNumber = Math.max(number1, number2);
  const minNumber = Math.min(number1, number2);

  let result = 0;

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

const getAttempt = () => {
  // Допустим, диапазон чисел от 1 до 100
  const number1 = getRandomNumber(100, 1);
  const number2 = getRandomNumber(100, 1);
  const correctResult = getGCD(number1, number2);

  return checkAnswer(`${number1} ${number2}`, String(correctResult));
};

const brainGcd = () => {
  startGame(getAttempt, 'Find the greatest common divisor of given numbers.');
};

export default brainGcd;
