import readlineSync from "readline-sync";
import {greeting} from "../cli.js";
import {getRandomNumber, startGame} from "../index.js";

const getRandomOperator = () => {
    const array = ['+', '-', '*'];
    const i = getRandomNumber(array.length);
    return array[i];
};

const calc = (number1, operator, number2) => {
    if (operator === '+') {
        return number1 + number2;
    } else if (operator === '-') {
        return number1 - number2;
    } else if (operator === '*') {
        return number1 * number2;
    }
};

const getAttempt = () => {
    const operator = getRandomOperator();
    // Допустим, диапазон чисел от 0 до 50
    const number1 = getRandomNumber(50);
    const number2 = getRandomNumber(50);
    const correctResult = calc(number1, operator, number2);

    console.log(`Question: ${number1} ${operator} ${number2}`);
    const answer = readlineSync.question("Your answer: ");
    if (Number(answer) === correctResult) {
        console.log("Correct!");
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.`);
        return false;
    }
};

const brainCalc = () => {
    startGame(
        getAttempt,
        'What is the result of the expression?'
    );
};

export {brainCalc};