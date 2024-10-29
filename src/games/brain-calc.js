import { checkAnswer, startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomOperator = () => {
  const array = ['+', '-', '*'];
  const i = getRandomNumber(array.length - 1, 0);
  return array[i];
};

const calc = (number1, operator, number2) => {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error('Некорректный знак оператора');
  }

  return result;
};

const getAttempt = () => {
  const operator = getRandomOperator();
  // Допустим, диапазон чисел от 0 до 50
  const number1 = getRandomNumber(50);
  const number2 = getRandomNumber(50);
  const correctResult = calc(number1, operator, number2);

  return checkAnswer(
    `${number1} ${operator} ${number2}`,
    String(correctResult),
  );
};

const brainCalc = () => {
  startGame(getAttempt, 'What is the result of the expression?');
};

export default brainCalc;
