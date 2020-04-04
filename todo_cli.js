const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let b = "\u2022"

let menu = `\n(v) View ${b} (n) New ${b} (cX) Complete ${b} (dX) Delete ${b} (q) Quit\n`
    + "> "

console.log("Welcome to Todo CLI!\n" + "----------")

let list = [];