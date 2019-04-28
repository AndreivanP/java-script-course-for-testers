let stringToReverse = "Juca bala";

let stringLenght = stringToReverse.length;
let reverseString = "";
for(let i=0; i < stringToReverse.length; i++){    
    stringLenght  = stringLenght - 1;
    let aux = stringToReverse[stringLenght];
    reverseString = reverseString + aux;    
}
console.log("Reversed string is "+reverseString);
