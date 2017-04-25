function printRange(start, end, skip) {
    start = start;
    end = end;
    skip = skip;
    for (var i = start; i < end; i = i+skip) {
            console.log(i);
    }
}
printRange(2, 10, 2);

// to return an Array
// function printRange(start, end, skip) {
//     start = start;
//     end = end;
//     skip = skip;
//     arr = [];
//     for (var i = start; i < end; i = i+skip) {
//             arr.push(i);
//     }return arr;
// }
// printRange(2, 10, 2);
