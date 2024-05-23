import { checkAnswer, getRandomNumber, startGame } from '../index.js';

const isEven = (number) => number % 2 === 0;

const getAttempt = () => {
  // Допустим, диапазон чисел от 0 до 99
  const number = getRandomNumber(99);
  const isEvenNumber = isEven(number);

  const correctResult = isEvenNumber ? 'yes' : 'no';

  return checkAnswer(number, correctResult);
};

const brainEven = () => {
  startGame(
    getAttempt,
    'Answer "yes" if the number is even, otherwise answer "no".',
  );
};

export default brainEven;
