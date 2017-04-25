nameArray = ["James", "Jill", "Jane", "Jack"];
symbol = "->";

function fancyArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + " " + symbol + " " + arr[i] + "");
    }return arr;
}
fancyArray(nameArray);


// ============================
// added custom symbol
// function fancyArray(arr, symbol) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(i + " " + symbol + " " + arr[i] + "");
//     }return arr;
// }
// fancyArray(nameArray, ">>");
