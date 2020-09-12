$(() => {
    $(document).ready(function () {
        var radomNumber = getRandomNumber();
        $('body').css('background-image', 'url(images/' + radomNumber + '.jpg)');
        $('#dob_month').select2({ height: '300px' });
        $('#country').select2({ height: '300px' });

    })

    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #btn-signin').click(toggleResetPswd);
    $('#logreg-forms .cancel_signup').click(toggleSignUp);
})
function toggleSignUp(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}
function toggleResetPswd(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}
function getRandomNumber() {
    var minimum = 1;
    var maximum = 4;
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}