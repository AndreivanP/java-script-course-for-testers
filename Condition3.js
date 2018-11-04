/*
    Number, we need to check its a even or odd
    if number is even then check is number is also
    divisible by 10 then it a perfect number;
*/


var inputNumber=11;

//Nested conditions
if (inputNumber % 2 == 0){
    if (inputNumber % 10==0){
        console.log("This is perfect number");
    }else {
        console.log("This is even number");
    }
} else {
    console.log("This is Odd number");
}