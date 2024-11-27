import { startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const rules = {
  firstQuestion:
    'Answer "yes" if given number is prime. Otherwise answer "no".',
};

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = `${getRandomNumber(100, 2)}`;
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const brainPrime = () => {
  startGame(generateRound, rules);
};

export default brainPrime;
