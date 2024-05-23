import readlineSync from 'readline-sync';

const greeting = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export const getRandomNumber = (max, min = 0) => {
  //   Реализация получения случайного числа в диапазоне от min до max
  //   На вход могут приниматься и целые, и дробные числа
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
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
  console.log('Welcome to the Brain Games!');
  const username = greeting();
  console.log(firstQuestion);

  for (let i = 1; i <= 3; i += 1) {
    const result = attemptFunction();
    if (!result) {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
