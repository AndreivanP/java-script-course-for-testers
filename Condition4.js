/* We are going to make 1 input (marks)

    if marks is less than 0 or more than 100 its invalid marks
    if marks are between 0-30, you are failed
    if marks are between 31-60, you are passed
    if marks are between 61-100, you are passed with honors

*/

var marks=1;

if(marks < 0 || marks > 100){
    console.log("This is invalid marks");
} else if (marks >= 0 && marks <= 30){
    console.log("Sorry, you are failed");
}else if (marks >= 31 && marks <= 60){
    console.log("You are passed!");
} else {
    console.log("You are passed with honors!!!");
}