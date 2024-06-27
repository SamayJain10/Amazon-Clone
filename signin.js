document.querySelector('form').addEventListener('submit', function(event) {
    alert('Form submitted!');
});

document.getElementById('signinForm').addEventListener('submit', function(event) {
    var inputField = document.getElementById('emailOrPhone');
    var errorMessage = document.querySelector('.error-message');


    const emailPattern = /\w+@\w+\.\w+/;
    const phonePattern = /^\d{10}$/;

    // Check if the input matches either an email or phone pattern
    if (!emailPattern.test(inputField.value) && !phonePattern.test(inputField.value)) {
        event.preventDefault();  
        errorMessage.style.display = 'block';  
        inputField.focus();  
    } else {
        errorMessage.style.display = 'none';  
    }
});

