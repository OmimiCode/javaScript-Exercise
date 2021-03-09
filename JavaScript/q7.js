/*
7 - Write a JavaScript program to compute the sum of the two given
integers. If the two values are same, then returns triple their sum.*/



function sum(number1, number2){
    if (number1 === number2){
        console.log(  "both values are the same, triple their sum is " + (number1+number2)**3);
    }else{
        console.log(number2+number1);
    }
}



sum(1,3)

sum(2,2)