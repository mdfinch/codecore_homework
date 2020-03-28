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
};