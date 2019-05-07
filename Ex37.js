let string = "Andreivan eu sei que isso não funciona mas eu mesmo  mas assim";
let stringLength = string.length;
let word = "";
let arrayOfWords = [];
let wordLength = 0;
let lastWord = string.split(" ").pop();

for(a=0; a < stringLength; a++){        
    if (string[a] != " " ){
        word = word + string[a];
        wordLength++        
    }
    if (string[a] == " " || word == lastWord) {
        arrayOfWords.push(word);
        wordLength = 0;
        word = "";
    }       
}
console.log(arrayOfWords.length); 
let findDuplicates = (juca) => juca.filter((item, index) => juca.indexOf(item) != index)

console.log(findDuplicates(arrayOfWords))





