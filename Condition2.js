
// We have a number, we need to check following conditions
//     - Check if number is negative, display negative number
//     - If number is 0 then display its 0
//     - If number is positive then check its even or odd

var inputNumber=7;

if (inputNumber < 0){
    console.log("This is Negative number");
} else if (inputNumber ==0){
    console.log("This number is zero");
} else if (inputNumber % 2==1){
    console.log("This is Even number");
} else {
    console.log("This is Odd number");
}