var chalk = require("chalk");

var message = chalk.red.italic("Hello ") + chalk.yellow.bgRed("World");
console.log(message);