$(document).ready(function () {
    $('button').click(function () {
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        $('#fName').append(firstName);
        $('#lName').append(lastName);
        $('#eAddress').append(email);
        $('#cNumber').append(phone);
    });return false;
});
