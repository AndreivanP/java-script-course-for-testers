
var sideA = 40;
var sideB = 60;
var sideC = 50;

if (sideA == sideB && sideA == sideC){
    console.log("This triangle is equilateral");
} else if (sideA != sideB && sideA != sideC && sideB != sideC) {
    console.log("The triangle is scalene");
} else if ((sideA == sideB && sideC != sideA || sideB)  || (sideA == sideC && sideB != sideA || sideC  )){
    console.log("The triangle is isosceles");
}