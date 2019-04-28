function fibonnacci (max){
    var a = 0;
    var b = 1;    
    for (i=1;i<=max;i++){
        var a = a + b;
        var b = a - b;
        console.log(b);
    }
}

fibonnacci(200);



