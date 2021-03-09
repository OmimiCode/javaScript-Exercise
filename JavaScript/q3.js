// 3 - Write a JavaScript program to find the area of a scalene triangle
// where lengths of the three of its sides are 5, 6, 7.


function areaOfAScaleneTriangle(side1,side2,side3){
    const S = 0.5*(side1+side2+side3);
    const A = Math.sqrt(S * (S - side1) * (S - side2) * (S - side3));
    console.log("Area : "+A+ " sq.units")
}


areaOfAScaleneTriangle(122,120,22)
areaOfAScaleneTriangle(5,6,7)