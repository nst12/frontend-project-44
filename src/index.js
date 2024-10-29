import readlineSync from 'readline-sync';

export const greeting = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export const checkAnswer = (question, correctResult) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctResult) {
    console.log('Correct!');
    return true;
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.`,
  );
  return false;
};

export const startGame = (attemptFunction, firstQuestion) => {
  const attemptsCount = 3;

  console.log('Welcome to the Brain Games!');
  const username = greeting();
  console.log(firstQuestion);

  for (let i = 1; i <= attemptsCount; i += 1) {
    const result = attemptFunction();
    if (!result) {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
