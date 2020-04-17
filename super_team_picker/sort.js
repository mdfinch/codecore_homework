let string = "michael, jay, pierce, amber, aaron, michelle, sukhi"
// let string = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15'


function teamCount(teamCount, string) {
let arr = string.split(',')
let array = []
for (let element of arr) {
    array.push(element.trim())
}
    let obj = {}
    // creates team key with empty array value
    for (let x = 0; x < teamCount; x++) {
        obj[`Team_${x + 1}`] = [];
    }
    // randomizes array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    // pushes the correct amount people onto each team
    teams = teamCount
    for (let a = 0; a < teamCount; a++) {
        let number = (array.length / teams)
        for (let counter = 0; counter < number; counter++) {
            obj[`Team_${a + 1}`].push(array.shift())
        }
        teams--
    }
    return obj
}

function numberPerTeam(numberPerTeam, string) {
    let arr = string.split(',')
let array = []
for (let element of arr) {
    array.push(element.trim())
}
let obj = {}
    teamCount = Math.round(array.length / numberPerTeam)

        for (let b = 0; b < teamCount; b++) {
            obj[`Team_${b + 1}`] = [];
        }
    
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        teams = teamCount
        for (let a = 0; a < teamCount; a++) {
            let number = (array.length / teams)
           
            for (let counter = 0; counter < number; counter++) {
                obj[`Team_${a + 1}`].push(array.shift())
            }
            teams--
        }
        return obj
}


console.log(teamCount(4, string));
console.log(numberPerTeam(4, string));