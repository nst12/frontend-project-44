import readlineSync from "readline-sync";
import {greeting} from "../cli.js";
import {getRandomNumber, startGame} from "../index.js";

const isEven = (number) => {
    return number % 2 === 0;
};

const getCorrectAnswer = (number) => {
    return isEven(number) ? "yes" : "no";
};

const getAttempt = () => {
    // Допустим, диапазон чисел от 0 до 99
    let number = getRandomNumber(99);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question("Your answer: ");
    const isEvenNumber = isEven(number);
    if ((isEvenNumber && answer === "yes") || (!isEvenNumber && answer === "no")) {
        console.log("Correct!");
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(number)}'.`);
        return false;
    }
};

const brainEven = () => {
    startGame(
        getAttempt,
        'Answer "yes" if the number is even, otherwise answer "no".'
    );
};

export {brainEven};