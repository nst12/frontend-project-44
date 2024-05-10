import {greeting} from "./cli.js";

export const getRandomNumber = (max) => {
//   Реализация получения случайного числа (допустим, от 0 до max)
    return Math.floor(Math.random() * max);
};

export const startGame = (attemptFunction, firstQuestion) => {
    console.log("Welcome to the Brain Games!");
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