// #1
for (var i = 1; i <= 255; i++){
    console.log(i);
}
// ===============================
// // #2
for(var i = 1; i<1000; i = i + 2){
    console.log(i);
}
// =============================
// #3
var sum = 0;
for (var i = 1; i < 5000; i = i + 2) {
    sum += i;
}
// #using %
var sum = 0;
for (var i = 1; i < 5000; i++) {
    if(i%2 !== 0){
        sum += i;
    }
}
// ===============================
var arr= [3, 55, 10, 78, 11];
// ==================================
// #4

for (var i = 0; i < arr.length; i++) {
    console.log(array[i]);
}
// =================================
// #5

var maxValue = arr[0];
for (var i = 1; i < arr.length; i++) {
    if(arr[i]>maxValue){
        maxValue = arr[i];
    }
}
// =============================
// #6
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum/arr.length);

// ================================
//#7
var y = [];
for (var i = 1; i <= 255; i=i+2) {
    y.push(i);
}
// ===============================
// #8

function greaterThanY(arr, y) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]>y) {
            console.log(arr[i]);
        }
    }
}

// ==========================
// #9

function squareArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*arr[i];
    }
}

// ===========================
// #10
function noNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]<0) {
            arr[i]=0;
        }
    }
}

// ==========================
// #11
var max = arr[0];
var min = arr[0];
var sum = 0;
for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]){
        max = arr[i];
    }
    if (min > arr[i]){
        min = arr[i];
    }
    sum += arr[i];
}
var avg = sum/arr.length;

// ============================
// #12
// couldn't remember this one
function shiftArr(arr) {
    for (var i = 0; i > array.length; i++) {
        array[i]
    }
}return arr;

// ===========================
// #13
function noNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]<0) {
            arr[i]="dojo";
        }
    }
}
