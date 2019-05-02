let isPalendrome = "Sir, I demand, I am a maid named Iris.";
let stringToReverse = isPalendrome

stringToReverse = stringToReverse.toLowerCase().trim();
stringToReverse = stringToReverse.replace(/\s+/g,"");
stringToReverse = stringToReverse.replace(/,/g, "");
stringToReverse = stringToReverse.replace(".", "");
stringToReverse = stringToReverse.replace(/!/g, "");
stringToReverse = stringToReverse.replace(/"/g, "");

let stringLenght = stringToReverse.length;
let reversedString = "";

for(let i=0; i < stringToReverse.length; i++){    
    stringLenght  = stringLenght - 1;
    let aux = stringToReverse[stringLenght];
    reversedString = reversedString + aux;        
}

if (stringToReverse === reversedString) {
    console.log(isPalendrome + " it's a palendrome!");
} else {
    console.log(isPalendrome + " it's not a palendrome!")
}
