$(document).ready(function() {
    $(document).on("click", "button", function() {
        var Name = $('#fName').val() + " " + $('#lName').val();
        var description = $('textarea').val();
        var newUser = '<div class="card"><h1 class="on"> ' + Name + ' </h1><h4 class="on">Click for description!</h4><p class="off"> ' + description + ' </p></div>';

        $('.card1').parent().prepend(newUser);
        return false;
    });
    $(document).on('click', 'h4', function() {
        $(this).slideToggle();
        $(this).siblings().slideToggle();

    });
    $(document).on('click', 'p', function() {
        $(this).slideToggle();
        $(this).siblings().slideToggle();

    });
});
