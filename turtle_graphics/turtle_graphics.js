class Turtle {
    constructor(x,y) {
        this.x = x; // sets this turtle's starting x
        this.y = y; // sets this turtle's starting y
        this.direction = "East"; // Sets initial direction
        this.array = []; // stores coordinates

    }

    forward(vector) {
    // updates either x or y coordinate depending on the direction
    switch (this.direction) {
        case "North":
            for(let i = 0; i <= vector; i++) {
                this.array.push([this.x, this.y - i])
            }
            this.y -= vector
            break;
        case "East":
            for(let i = 0; i <= vector; i++) {
                this.array.push([this.x + i, this.y])
            }
            this.x += vector
            break;
        case "South":
            for(let i = 0; i <= vector; i++) {
                this.array.push([this.x, this.y + i])
            }
            this.y += vector
            break;
        case "West":
            for(let i = 0; i <= vector; i++) {
                this.array.push([this.x - i, this.y])
            }
            this.x -= vector
            break;
        }
        return this;
    }

    right() {
    // updates the direction right for the forward function to use
    switch (this.direction) {
        case "North":
            this.direction = "East";
            break;
        case "East":
            this.direction = "South";
            break;
        case "South":
            this.direction = "West";
            break;
        case "West":
            this.direction = "North";
            break;
        }
        return this;
    }

    left() {
     // updates the direction left for the forward function to use
    switch (this.direction) {
        case "North":
            this.direction = "West";
            break;
        case "West":
            this.direction = "South";
            break;
        case "South":
            this.direction = "East";
            break;
        case "East":
            this.direction = "North";
            break;
        }
        return this;
    }

    allPoints() {
        // returns the array of coordinates
        return this.array;
    }
    
    print() {
    this.maxX = 0; // default values
    this.maxY = 0;
    this.minX = 0;
    this.minY = 0;
    
    for (let coordinate of this.array) {
        // loops through every x using [0] and every y using [1]
        if (coordinate[0] > this.maxX) {
            // updates maxX or maxY accordingly
            this.maxX = coordinate[0];
        }
        if (coordinate[1] > this.maxY) {
            this.maxY = coordinate[1];
        }
        if (coordinate[0] < this.minX) {
            this.minX = coordinate[0];
        }
        if (coordinate[1] < this.minY) {
            this.minY = coordinate[1];
        }
    }
    // callback function to determine if the current row (y), and the current position in that row (x), matches any of the coordinates in the array
    const printPath = (x, y) => {
        for (let coordinate of this.array) {
            // if true the loop ends and true is returned to the for loop that is logging characters
            if (coordinate[0] === x && coordinate[1] === y)
            return true;
        }
        // else after all coordinates have been checked, false is returned to the loop that is logging characters
        return false;
    };
    
    console.log('-- BEGIN LOG --');
    // for loop starting from the largest (maxY) coordinate, + 1 to make it look like the lab instructions (empty row at start)
    for (let y = this.maxY + 1; y > this.minY; y--) {
        let row = '';
        // for loop staring from the smallest (minX) coordinate
        // the current row (y) and each space in that row (x) are sent through the callback
        // if a cordinate is found that matches the current (x,y) of the printing loops, a solid square is printed, else a hollow one is printed
        for (let x = this.minX; x <= this.maxX + 1; x++) {
            printPath (x, y) ? row += ' \u25A0 ' : row += ' \u25A1 ';
        }
            console.log(row);
        }
        
    console.log('-- END LOG --');
    }
};

const flash = new Turtle(0, 4);
flash.forward(3).left().forward(3).right().forward(5).right().forward(8).right().forward(5).right().forward(3).left().forward(3);
// console.log(flash.allPoints())
flash.print();