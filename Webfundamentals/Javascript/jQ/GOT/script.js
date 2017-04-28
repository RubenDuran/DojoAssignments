$(document).ready(function() {
    $('img').click(function() {
        var house = $(this).attr('houseID');
        var url = "https://www.anapioficeandfire.com/api/houses/"+ house;

        $.get(url, function(res) {
            var name = res.name;
            var words = res.words;
            var titles = res.titles;
            var houseString = "<div class='details'><h4>Name:"+name+"</h4><h4>Words:"+words+"</h4><br><h4>Titles:" +titles+"</h4></div>";
            $('.details').html(houseString);
        }, 'json');
    });
    return false;

});
