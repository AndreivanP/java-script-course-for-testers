
var Physics = 0;
var Chemistry = 0;
var Biology = 70;
var Mathematics = 20;
var Computer = 80;
var total = 0;
var average= 0;

if ((Physics > 100 || Physics < 0) || (Chemistry > 100 || Chemistry < 0) ||
    (Biology > 100 || Biology < 0) || (Mathematics > 100 || Mathematics < 0) ||
    (Computer > 100 || Computer < 0)){
        console.log("There is some invalid marks. Please double check.")
    } else { total = Physics + Chemistry + Biology + Mathematics + Computer;
            average = total / 5;
            if (average >= 90){
                console.log("Grade A");
            } else if (average >= 80) {
                console.log("Grade B");
            } else if (average >= 70){
                console.log("Grade C");
            } else if (average >= 60){
                console.log("Grade D");
            } else if (average >= 40){
                console.log("Grade E");
            } else if (average < 40){
                console.log("Grade F")
            }
    }

