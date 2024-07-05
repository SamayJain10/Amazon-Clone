$(document).ready(function() {
    $('#signinForm').submit(function(event) {
        var inputField = $('#emailOrPhone').val();
        var errorMessage = $('.error-message');
        const emailPattern = /\w+@\w+\.\w+/;
        const phonePattern = /^\d{10}$/;

        if (!emailPattern.test(inputField) && !phonePattern.test(inputField)) {
            event.preventDefault();
            errorMessage.show();
            errorMessage.text('Please enter a valid email or 10-digit phone number.');
            $('#emailOrPhone').focus();
        } else {
            errorMessage.hide();
        }
    });

    $('#signupForm').submit(function(event) {
        var inputField = $('#emailOrPhone').val();
        var passwordField = $('#password').val();
        var errorMessage = $('.error-message');
        const emailPattern = /\w+@\w+\.\w+/;
        const phonePattern = /^\d{10}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

        if (!emailPattern.test(inputField) && !phonePattern.test(inputField)) {
            event.preventDefault();
            errorMessage.show();
            errorMessage.text('Please enter a valid email or 10-digit phone number.');
            $('#emailOrPhone').focus();
        } else if (!passwordPattern.test(passwordField)) {
            event.preventDefault();
            errorMessage.show();
            errorMessage.text('Password must contain at least one number, one uppercase and lowercase letter, one special character, and at least 8 or more characters.');
            $('#password').focus();
        } else {
            errorMessage.hide();
        }
    });

    // Back to top functionality
    $('.backtop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    // Sidebar toggle
    $('.nav-1 div').click(function() {
        $('.sidebar').toggleClass('active');
        $('.fa-xmark').toggle();
        $('.black').toggleClass('active');
        $('body').toggleClass('stop-scroll');
    });

    $('.fa-xmark').click(function() {
        $('.sidebar').removeClass('active');
        $(this).hide();
        $('.black').removeClass('active');
        $('body').removeClass('stop-scroll');
    });
});
