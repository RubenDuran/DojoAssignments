var images = "";

function appendImages() {
    $('.container').append(images);
};

function addImages() {
    for (var i = 1; i < 152; i++) {
        images += '<img poke=' + i + ' src="http://pokeapi.co/media/img/' + i + '.png">';
    };
    return images;
};

$(document).ready(function() {
    addImages();
    appendImages();
    $('img').click(function() {
        var id = $(this).attr('poke');
        var apiUrl = "http://pokeapi.co/api/v1/pokemon/" + id + "/";
        var imgUrl = $(this).attr('src');

        $.get(apiUrl, function(res) {
            var thisName = res.name;
            var height = res.height;
            var weight = res.weight;
            var html_str = "";
            html_str += "<h1>" + thisName + "</h1><img src='" + imgUrl + "'><h4>Types</h4>";
            html_str += "<ul>"
            for (var i = 0; i < res.types.length; i++) {
                html_str += "<li>" + res.types[i].name + "</li>";
            }
            html_str += "</ul><h3>Height</h3><p>" + height + "</p><h3>Weight</h3><p>" + weight + "</p>";

            $(".dex").html(html_str);
        }, "json");
    });
});
