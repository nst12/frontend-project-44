import { checkAnswer, getRandomNumber, startGame } from '../index.js';

const getAttempt = () => {
  const randomNumber = getRandomNumber(100, 2);

  let isPrime = true;

  for (let i = 2; i <= randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      isPrime = false;
      break;
    }
  }

  const correctAnswer = isPrime ? 'yes' : 'no';

  return checkAnswer(randomNumber, correctAnswer);
};

const brainPrime = () => {
  startGame(
    getAttempt,
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  );
};

export default brainPrime;
