import { startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const rules = {
  firstQuestion: 'What is the result of the expression?',
};

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

const generateRound = () => {
  const operator = getRandomOperator();
  const number1 = getRandomNumber(50);
  const number2 = getRandomNumber(50);

  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calc(number1, operator, number2));

  return [question, answer];
};

const brainCalc = () => {
  startGame(generateRound, rules);
};

export default brainCalc;
