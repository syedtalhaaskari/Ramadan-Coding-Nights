#! /usr/bin/env node

// SHABANG

import inquirer from 'inquirer';

const answer = await inquirer.prompt([
    {
        message: 'Enter first number',
        type: 'number',
        name: 'firstNumber'
    },
    {
        message: 'Enter second number',
        type: 'number',
        name: 'secondNumber'
    },
    {
        message: 'Select one of the operators to perform action',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Remainder']
    },
]);

// conditional statement
if (answer.operator === 'Addition') {
    console.log(`Your value is: ${answer.firstNumber + answer.secondNumber}`);
} else if (answer.operator === 'Subtraction') {
    console.log(`Your value is: ${answer.firstNumber - answer.secondNumber}`);
} else if (answer.operator === 'Multiplication') {
    console.log(`Your value is: ${answer.firstNumber * answer.secondNumber}`);
} else if (answer.operator === 'Division') {
    console.log(`Your value is: ${answer.firstNumber / answer.secondNumber}`);
} else if (answer.operator === 'Remainder') {
    console.log(`Your value is: ${answer.firstNumber % answer.secondNumber}`);
} else {
    console.log('Invalid Operation');
}