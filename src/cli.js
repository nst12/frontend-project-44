import readlineSync from "readline-sync"

const greeting = () => {
  let username = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${username}!`);
};

export { greeting };