#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.round(Math.random() * 5);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess"
    }
]);
console.log(`Random Number: ${randomNumber}`);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}
else {
    console.log("Sorry! You guessed wrong number;");
}
