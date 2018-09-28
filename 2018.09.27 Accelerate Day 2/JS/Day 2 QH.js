function calculator (symbol, num1, num2) {
    switch (symbol) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        
    }
}

console.log(calculator('+', 5, 9)) // 14
console.log(calculator('-', 7, 3)) // 4
console.log(calculator('*', 5, 5)) // 25
console.log(calculator('/', 9, 3)) // 3

// Bonus exercise

/* wrong function
function area(height width) {
    height * width;
}
*/

function area(height, width) {
    return height * width;
}