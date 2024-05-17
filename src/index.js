import {greeting} from "./cli.js";

export const getRandomNumber = (max, min = 0) => {
//   Реализация получения случайного числа в диапазоне от min до max
//   На вход могут приниматься и целые, и дробные числа
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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