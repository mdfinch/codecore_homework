const fs = require("fs"); // enables use of file system from node
const readline = require("readline"); // enables use of readline from node

// enables input and output from terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let b = "\u2022" // bullet point character

// string of todo_cli options
let menu = `\n(v) View ${b} (n) New ${b} (cX) Complete ${b} (dX) Delete ${b} (q) Quit\n`
    + "> "

console.log("Welcome to Todo CLI!\n" + "----------")

let list = [];

// todo function calls menu immediately
const todo = function () {

    // readline question allows user to choose from menu choices
    rl.question(menu, answer => {
        switch (answer.substr(0, 1)) {

            // if list is empty says empty, else dynamically displays list
            case 'v':
                if (list.length === 0) {
                    console.log("The list is empty!")
                } else {
                    for (let x = 0; x < list.length; x++) {
                        console.log(x + ' ' + list[x])
                    }
                }
                // each todo(); in every option except quit recursively displays the menu
                todo();
                break;
            
            // dynamically adds a task to the end of the list array
            case 'n':
                rl.question("What would you like to add to the todo list?\n> ", task => {
                    list.push(`[] ${task}\n`)
                    todo();
                })

                break;
            
            // informs if task doesn't exist, else changes empty [] to contain a checkmark
            case `c`:
                list[answer.substr(1)] === undefined ? console.log("That task doesn't exit") : list[answer.substr(1)] = (list[answer.substr(1)]).replace('[]', '[\u2713]');
                todo();
                break;

            // informs if task doesn't exist, else removes the chosen task
            case 'd':
                list[answer.substr(1)] === undefined ? console.log("That task doesn't exit") : list.splice(answer.substr(1), 1)
                todo();
                break;
            
            // quits todo_cli
            case 'q':
                console.log("Goodbye!")
                rl.close()
                break;
            
            // any input which doesn't match those listed informs the user
            default:
                console.log("Please choose a valid command!")
                todo();
        }
    })
};

todo();