// We are going to have 3 numbers and we need to find out which one is the largest

var a = 800;
var b = 802;
var c = 81;

if (a > b && a > c){
    console.log(a+ " is the largest number");
} else if (b > a && b > c){
    console.log(b+ " is the largest number");
} else if (c > a && c > b) {
    console.log (c+ " is the largest number");
}

var d = 800;
var e = 30;
var f = 81;

if (d < e && d < f){
    console.log(d+ " is the smallest number");
} else if (e < d && e < f){
    console.log(e+ " is the smallest number");
} else if (f < d && f < e) {
    console.log (f+ " is the smallest number");
}