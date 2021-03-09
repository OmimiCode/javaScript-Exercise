/*
6 - Write a function rotate that rotates the elements of an array. All
elements should be moved one position to the left. The 0th element
should be placed at the end of the array. The rotated array should be
returned.
** Example: rotate(['a', 'b', 'c']) should
return ['b', 'c', 'a'].*/


function rotate(arrayOfElement){
    return arrayOfElement.reverse()
}


var result = rotate([1,2,3,4])
console.log(result)

