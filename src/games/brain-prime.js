import { checkAnswer, startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAttempt = () => {
  const randomNumber = getRandomNumber(100, 2);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return checkAnswer(randomNumber, correctAnswer);
};

const brainPrime = () => {
  startGame(
    getAttempt,
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  );
};

export default brainPrime;
