const newLine = "\n";
const drawLine = (num) => "\u2501".repeat(num);
const drawTopBorder = num => "\u250f" + drawLine(num) + "\u2513" + newLine;
const drawMiddleBorder = num => newLine + "\u2523" + drawLine(num) + "\u252b" + newLine;
const drawBottomBorder = num =>  newLine + "\u2517" + drawLine(num) + "\u251b" ;
const drawBarsAround = string => newLine + "\u2503" + string + "\u2503" + newLine;


function boxIt(array){
   let arr;
   let space = 0;
    array[0] === undefined ? drawTopBorder() + drawBottomBorder() : arr = array.filter(elm => (elm !== undefined));

    for(let x = 0; x < arr.length; x++){
        if (space < arr[x].length) {
            space = arr[x].length
        }
    }
    
    let box = drawTopBorder(space)
        for(let x = 0; x < arr.length; x++) {
            x < arr.length-1 ? box += drawBarsAround(arr[x] + " ".repeat(space-arr[x].length)) +  drawMiddleBorder(space) : box += drawBarsAround(arr[x] + " ".repeat(space-arr[x].length))
        }    
    box += drawBottomBorder(space)

    return box
}

console.log(boxIt([process.argv[2],process.argv[3],process.argv[4]]));