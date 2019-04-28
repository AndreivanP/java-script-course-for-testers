
function compare10LastCharc(stringA, stringB){
    //stringA.toUpperCase();
    //stringB.toUpperCase();

    var lengthA = stringA.length;
    var stringAv2 = "";

    for (i=lengthA;i>=10;i--){
        stringAv2 = stringAv2 + stringA.charAt(i);
    }
    console.log(lengthA);
    console.log(stringAv2);
}

compare10LastCharc("Juca bala teste Juca bala teste sei la","Juca");

function testCharAt(StringX,charPosition){
    var abc = StringX.charAt(charPosition);
    console.log(abc);
}

testCharAt("abcde",3);
