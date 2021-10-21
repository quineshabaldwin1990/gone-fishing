// Promopt package to handle console input
const prompt = require("prompt-sync")({ sigint: true });
// Chalk package to styling of the terminal
const chalk = require('chalk');

// Initialization
console.log(chalk.red("========================================================================"));

console.log(chalk.blue.bold("You've gone fishing! Try to maximize the value of your caught fish.",
    "\n You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish."));

console.log(chalk.red("========================================================================"));

// Stroing all fish value
let allFishes = {};