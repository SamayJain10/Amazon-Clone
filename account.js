document.getElementById('signinForm').addEventListener('submit', function(event) {
    var inputField = document.getElementById('emailOrPhone');
    var errorMessage = document.querySelector('.error-message');


    const emailPattern = /\w+@\w+\.\w+/;
    const phonePattern = /^\d{10}$/;

    // Check the input matches either an email or phone pattern
    if (!emailPattern.test(inputField.value) && !phonePattern.test(inputField.value)) {
        event.preventDefault();  
        errorMessage.style.display = 'block';  
        inputField.focus();  
    } else {
        errorMessage.style.display = 'none';  
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    var inputField = document.getElementById('emailOrPhone');
    var passwordField = document.getElementById('password');
    var errorMessage = document.querySelector('.error-message');

    const emailPattern = /\w+@\w+\.\w+/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

    // Check the input matches either an email or phone pattern
    if (!emailPattern.test(inputField.value) && !phonePattern.test(inputField.value)) {
        event.preventDefault();  
        errorMessage.style.display = 'block';  
        errorMessage.textContent = 'Please enter a valid email or 10-digit phone number.';
        inputField.focus();  
    } else if (!passwordPattern.test(passwordField.value)) {
        event.preventDefault();  
        errorMessage.style.display = 'block';  
        errorMessage.textContent = 'Password must contain at least one number, one uppercase and lowercase letter, one special character, and at least 8 or more characters.';
        passwordField.focus();  
    } else {
        errorMessage.style.display = 'none';  
    }
});




