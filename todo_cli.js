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

const todo = function () {
    rl.question(menu, answer => {
        switch (answer.substr(0, 1)) {
            case 'v':
                if (list.length === 0) {
                    console.log("The list is empty!")
                } else {
                    for (let x = 0; x < list.length; x++) {
                        console.log(x + ' ' + list[x])
                    }
                }
                todo();
                break;

            case 'n':
                rl.question("What would you like to add to the todo list?\n> ", task => {
                    list.push(`[] ${task}\n`)
                    todo();
                })

                break;


            default:
                console.log("Please choose a valid command!")
                todo();
        }
    })
};

todo();