// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.

function runningLogger(){
    console.log('Im running');
}

// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.

function multiplyByTen(value) {
    return value*10;
}
console.log(multiplyByTen(5));

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
function stringReturnOne() {
    return "This is a string"
}

function stringReturnTwo() {
    return "This also is a string"
}


// Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.



function caller(fun) {
    if (typeof fun == "function"){
        fun()
    }
}
caller(stringReturnTwo());


// Medium: Write a function named myDoubleConsoleLog that has two parameters. if the arguments passed to the function are functions, console.log the value that each function returns when invoked.

function myDoubleConsoleLog(fun1, fun2) {
    if(typeof fun1 == 'function' && typeof fun2 == 'function'){
        console.log(fun1());
        console.log(fun2());
    }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

// This is a string
// This also is a string


// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function caller2(param) {
    console.log('starting');
    if(typeof param == 'function'){
        setTimeout(param, 2000)
            console.log('ending');
    }
    return "interesting"
}

caller2(myDoubleConsoleLog);
