
function notShowsMultiples357(maxValue){
    var number = 1;
    for (i=1;i<=maxValue;i++){
        number = number + 1;
        if (number % 3 == 0 || number % 5 == 0 || number % 7 == 0){
            continue;
        } else {
            console.log(number + " Is not divisible by 3, 5 or 7");
        }
    }
}

notShowsMultiples357(100);