import readlineSync from "readline-sync";
import {greeting} from "../src/cli.js";

const getRandomNumber = () => {
//   Реализация получения случайного числа (допустим, от 0 до 99)
  const max = 99;
  return Math.floor(Math.random() * max);
};

const isEven = (number) => {
  return number % 2 === 0;
};

const getCorrectAnswer = (number) => {
  return isEven(number) ? "yes" : "no";
};

const getAttempt = () => {
  let number = getRandomNumber();

  console.log(`Question: ${number}`);
  const answer = readlineSync.question("Your answer: ");

  if ((isEven(number) === true && answer === "yes") || (isEven(number) === false && answer === "no")) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(number)}'.`);
    return false;
  }
};

const brainEven = () => {
  console.log("Welcome to the Brain Games!");
  const username = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const result = getAttempt();
    if (result === false) {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

brainEven();
