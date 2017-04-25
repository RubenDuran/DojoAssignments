

function nmbrsOnly(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArray.push(arr[i]);
        }
    }return newArray;
}

testArray = [1, "apple", -3, "orange", 0.5];
nmbrsOnly(testArray);
