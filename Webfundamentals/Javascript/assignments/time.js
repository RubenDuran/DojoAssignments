
console.log("What time is it?");
var hour = prompt("hour");

var minute = prompt("minute");
var period = prompt("AM or PM");
if (period == "AM" || period == "am"){
    period = "morning";
}else {
    period = "evening";
}
if(minute > 30){
    hour = parseInt(hour) + 1;
    console.log("It's almost " + hour + " in the " + period);
}
else{
    console.log("It's just after " + hour + " in the " + period);
}
