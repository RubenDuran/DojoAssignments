// $('.ui.checkbox')
//     .checkbox();
$(document).ready(function() {
    console.log("ready!");
    $("#regBtn").click(function() {
        // ui.basic.modal.
        $('#reg')
            .modal('show');
    });
    $(".loginBtn").click(function() {
        $('#login')
            .modal('show');
    });
    $("#cancelBtn").click(function() {
        $('#login')
            .modal('hide')
    });
    $("#cancel").click(function() {
        $('#reg')
            .modal('hide')
    });
    $(".cancelBtn").click(function() {
        $('#login')
            .modal('show')
    });


});
