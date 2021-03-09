// 10 - Write a JavaScript program to compute the sum and product of
// an array of integers.



function sumAndProductOfElementInAnArray(arrayOfElements){
    let element = 0
    let sum = 0;
    let product = 1
    while(element < arrayOfElements.length){
        sum += arrayOfElements[element]
        product*= arrayOfElements[element]
        element++;
    }
    return console.log("sum : " + sum, "product : " +product)
}

sumAndProductOfElementInAnArray([1,2,3,4])