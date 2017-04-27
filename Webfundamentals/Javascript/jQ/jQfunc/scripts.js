$(document).ready(function() {

    // change color of p tag with class colorLess after clicking btn with colorChanger ID
    $('#colorChanger').click(function() {
        $('p.colorLess').addClass('red');
    });


    // toggle image on btn click
    $('#imageTog').click(function() {
        $('img').slideToggle('slow');
    });

    $('#appender').click(function() {
        $('p#lastP').append('<p>Appending new Paragraph!!!</p>');
    });
    $('#hider').click(function() {
        $('p#hiddenP').hide();
    });
    $('#shower').click(function() {
        $('p#showP').show();
    });
    $('#toggler').click(function() {
        $('p#toggleP').toggle();
    });
    $('#downer').click(function() {
        $('#downerP').slideDown(1000);
    });
    $('#fader').click(function() {
        $('#faderP').fadeIn();
    });
    $('#faderOuter').click(function() {
        $('#faderOuterP').fadeOut();
    });
    $('#before').click(function() {
        $('#beforeP').before('<h1>You thought wrong, I came before you! </h1>');
    });
    $('#after').click(function() {
        $('#afterP').after('<h1>Yeah and I came after! </h1>');
    });
    $('#attrer').click(function() {
        $('#attrP').attr("src", "https://www.codementor.io/assets/page_img/learn-javascript.png");
    });
    $('#textTest').click(function() {
        var value = $("input").val();
        console.log(value);
        $("#textP").text(value);
    });

});
