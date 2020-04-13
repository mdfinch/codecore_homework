let string = "michael, jay, pierce, amber, aaron, michelle"

let array = string.split(',')

for (let arr of array) {
    arr.trim()
}

console.log(array)

