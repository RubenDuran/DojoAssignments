// fib sequence function printing all fib numbers untill num
function fib(num) {
    var a = 0;
    var b = 1;
    var result = b;
    console.log(b);
    for(var i = 1; i <= num; i++){
        console.log(result);
        result = a + b;
        a = b;
        b = result;
    }
}

// fib sequence function returning reslut of num
function fib(num) {
    var a = 0;
    var b = 1;
    var result = b;
    if(num === 1){
        result = 1;
    }else {
        for(var i = 2; i <= num; i++){
            result = a + b;
            a = b;
            b = result;
        }
    } //console.log(result); uncomment to print result to console
    return result;
}
