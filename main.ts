#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.white.bold.bgBlue("\n \t Welcome to codiiingwithhamza - currency convertor\n"));

// Define the list of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1, // Base Currency
    "EUR": 0.935, // European Currency (Euro)
    "JYP": 156.843, // Japanese Currency (Yen)
    "CAD": 1.365, // Canadian Dollar
    "AUD": 1.543, // Australian Dollar
    "PKR": 278.130, // Pakistani Rupees
    //Add more currency and their exchange rates
}

// propmt the usewr to select currencies to convert and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.green.bold("Select the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow.bold("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.cyanBright.bold("Enter the amount to convert:")
    }
]); 
 
// Performs currency conversion by using formula
let from_amount =  exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);