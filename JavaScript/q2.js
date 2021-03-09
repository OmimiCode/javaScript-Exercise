// 2- Write a JavaScript program to check from two given integers,
//     whether one is positive and another one is negative.


function negativeAndPositiveChecker(number1, number2){
    if (number1 < 0 ){
        console.log(number1 +" is negative");
    }else
        console.log(number1 +" is positive");
    if (number2 < 0 ){
        console.log(number2 +" is negative");
    }else
        console.log(number2 +" is positive");


}


negativeAndPositiveChecker(-2,7)