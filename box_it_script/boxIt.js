const newLine = '\n'
const drawLine = (num) => '\u2501'.repeat(num)
const drawTopBorder = num => '\u250f' + drawLine(num) + '\u2513' + newLine
const drawMiddleBorder = num => newLine + '\u2523' + drawLine(num) + '\u252b' + newLine
const drawBottomBorder = num =>  newLine + '\u2517' + drawLine(num) + '\u251b' 
const drawBarsAround = string => newLine + '\u2503' + string + '\u2503' + newLine