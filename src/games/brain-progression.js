import {getRandomNumber, startGame} from "../index.js";
import readlineSync from "readline-sync";

const getRandomProgression = (min, max, stepMin, stepMax, length) => {
    const firstItem = getRandomNumber(max, min);
    const step = getRandomNumber(stepMax, stepMin);
    let i = 0;
    const result = [firstItem];
    while (i < length - 1) {
        result.push(result.at(-1) + step);
        i += 1;
    }
    return result;
};

const getAttempt = () => {
    const progressionLength = getRandomNumber(10, 5);
    const progression = getRandomProgression(1, 50, 2, 10, progressionLength);
    const emptyIndex = getRandomNumber(progressionLength - 1, 0)

    const correctResult = progression[emptyIndex];
    progression[emptyIndex] = '..';

    console.log(`Question: ${progression.join(" ")}`);
    const answer = readlineSync.question("Your answer: ");
    if (Number(answer) === correctResult) {
        console.log("Correct!");
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.`);
        return false;
    }
};

export const brainProgression = () => {
    startGame(
        getAttempt,
        'What number is missing in the progression?'
    );
};