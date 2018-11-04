
var monthNumber = 12;

if (monthNumber > 12 || monthNumber < 1) {
    console.log("This is not a valid month.");
}
if (monthNumber % 2 == 0){
    if (monthNumber == 2){
        console.log("This month has 28 days.")
    } else if (monthNumber == 8) {
        console.log("This month has 31 days.");
    } else if (monthNumber == 10){
        console.log("This month has 31 days.");
    } 
    else {
        console.log("This month has 30 days.");
    }     
    if (monthNumber % 2 == 1){
        if (monthNumber == 9) {
            console.log("This month has 30 days.");
        } else if (monthNumber == 11){
            console.log("This month has 30 days.");
        } else if (monthNumber == 12){
            console.log("This month has 31 days.");
        } else {
            console.log("This month has 31 days.");
        }
    }
    
} 