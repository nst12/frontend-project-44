import readlineSync from "readline-sync";
import {checkAnswer, getRandomNumber, startGame} from "../index.js";

const getRandomOperator = () => {
    const array = ['+', '-', '*'];
    const i = getRandomNumber(array.length - 1, 0);
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

    return checkAnswer(`${number1} ${operator} ${number2}`, String(correctResult));
};

const brainCalc = () => {
    startGame(
        getAttempt,
        'What is the result of the expression?'
    );
};

export {brainCalc};