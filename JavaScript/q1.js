
/*1 - Write a JavaScript program to check two given numbers and return
true if one of the number is 50 or if their sum is 50.*/

function numberChecker(number1, number2){
    const sum = number1 + number2;
    return number1 === 50 || number2 === 50 || sum === 50;
}


let a = numberChecker(26,24);
console.log(a)
let b = numberChecker(2,24);
console.log(b)
