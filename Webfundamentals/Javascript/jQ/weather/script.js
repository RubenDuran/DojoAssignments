$(document).ready(function() {
    $('form').submit(function() {
        var city = $('#cityName').val();
        var aID = "6c32514ccb02a3376302977bf9ee55d7"
        var f = '&units=imperial'
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + f + "&&appid=" + aID;
        $.get(url, function(res) {
            var temp = res.main.temp;
            var tempString = "<h1>" + city + "</h1><h4>The tempature is: " + temp + " f</h4>";
            $('#result').html(tempString);
        }, 'json');
        return false;
    });
});
