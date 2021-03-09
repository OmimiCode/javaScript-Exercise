/*
4 - Write a function toArray that takes 2 values and returns these
values in an array.*/

function toArray(value1, value2){
    const array = Array.from(arguments);
    // const array = [value1, value2];
    console.log(array)
}



toArray(2,3)

toArray("john", "stephen")
