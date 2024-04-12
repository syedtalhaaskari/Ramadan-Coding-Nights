import inquirer from "inquirer";
let balance = 10_000;
const pin = 1234;
console.clear();
const userPin = await inquirer.prompt({
    name: 'pin',
    message: 'Enter your PIN',
    type: 'number'
});
if (userPin.pin === pin) {
    console.clear();
    const { option } = await inquirer.prompt({
        name: 'option',
        type: 'list',
        message: 'Select your option:',
        choices: [
            {
                name: '1. Withdraw',
                value: 1
            },
            {
                name: '2. Current Balance',
                value: 2
            },
        ]
    });
    switch (option) {
        case 1:
            const { amount } = await inquirer.prompt({
                name: 'amount',
                type: "number",
                message: 'Enter amount to withdraw: ',
                default: 1
            });
            if (amount > balance || amount === 0) {
                console.log(`Invalid amount`);
            }
            else {
                balance -= amount;
                console.log(`$${amount} is withdrawn from your account.`);
                console.log(`Your current balance is $${balance}`);
            }
            break;
        case 2:
            console.log(`Your current balance is $${balance}`);
            break;
        default:
            console.log('Invalid option');
    }
}
else {
    console.log('Wrong PIN!');
}
