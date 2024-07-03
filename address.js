document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('addressForm');
    var fullName = document.getElementById('fullName');
    var mobileNumber = document.getElementById('mobileNumber');
    var pincode = document.getElementById('pincode');

    var nameError = document.getElementById('nameError');
    var mobileError = document.getElementById('mobileError');
    var pincodeError = document.getElementById('pincodeError');

    var namePattern = /^[A-Za-z\s]+$/;
    var mobilePattern = /^\d{10}$/;
    var pincodePattern = /^\d{6}$/;

    function validateFullName() {
        if (!namePattern.test(fullName.value.trim())) {
            nameError.textContent = 'Full name can only contain alphabets and spaces.';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validateMobileNumber() {
        if (!mobilePattern.test(mobileNumber.value.trim())) {
            mobileError.textContent = 'Mobile number must be exactly 10 digits.';
            return false;
        } else {
            mobileError.textContent = '';
            return true;
        }
    }

    function validatePincode() {
        if (!pincodePattern.test(pincode.value.trim())) {
            pincodeError.textContent = 'Pincode must be exactly 6 digits.';
            return false;
        } else {
            pincodeError.textContent = '';
            return true;
        }
    }

    function validateForm() {
        var isFullNameValid = validateFullName();
        var isMobileNumberValid = validateMobileNumber();
        var isPincodeValid = validatePincode();

        return isFullNameValid && isMobileNumberValid && isPincodeValid;
    }

    fullName.addEventListener('input', validateFullName);
    mobileNumber.addEventListener('input', validateMobileNumber);
    pincode.addEventListener('input', validatePincode);

    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});


const backtop = document.querySelector(".backtop");
backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});


// Sidebar functionality for show and hide
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".nav-1");

// Initially hide the 'xmark' or close button
cross.style.display = 'none';

// Event listener to open the sidebar
sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    cross.style.display = 'block'; 
    black.classList.add("active");
    document.body.style.overflow = 'hidden'; 
});

// Event listener to close the sidebar
cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    cross.style.display = 'none'; 
    black.classList.remove("active");
    document.body.style.overflow = ''; 
});