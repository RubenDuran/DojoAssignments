$(document).ready(function() {

    $('img').click(function() {
        var temp = $(this).attr('data-alt-src');
        var temp2 = $(this).attr('src');
        $(this).attr({
            "src": temp,
            "data-alt-src": temp2
        });
    });

});
