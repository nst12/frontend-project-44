import {getRandomNumber, startGame} from "../index.js";
import readlineSync from "readline-sync";

const calc = (number1, number2) => {
    const maxNumber = Math.max(number1, number2);
    const minNumber = Math.min(number1, number2);
    if (maxNumber % minNumber === 0) {
        return minNumber;
    } else {
        for (let i = Math.floor(minNumber / 2); i >= 1; i -= 1) {
            if (maxNumber % i === 0 && minNumber % i === 0) {
                return i;
            }
        }
    }
};

const getAttempt = () => {
    // Допустим, диапазон чисел от 1 до 100
    const number1 = getRandomNumber(100, 1);
    const number2 = getRandomNumber(100, 1);
    const correctResult = calc(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question("Your answer: ");
    if (Number(answer) === correctResult) {
        console.log("Correct!");
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.`);
        return false;
    }
};

export const brainGcd = () => {
    startGame(
        getAttempt,
        'Find the greatest common divisor of given numbers.'
    );
};