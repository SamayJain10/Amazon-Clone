document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('addressForm');
    var fullName = document.getElementById('fullName');
    var mobileNumber = document.getElementById('mobileNumber');
    var pincode = document.getElementById('pincode');

    function validateField(field, pattern, errorElement, errorMessage) {
        if (!pattern.test(field.value.trim())) {
            errorElement.textContent = errorMessage;
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }

    form.addEventListener('submit', function(event) {
        var isValid = true; // Assume form is valid unless proven otherwise

        // Detailed validation for each field
        if (!validateField(fullName, /^[A-Za-z\s]+$/, document.getElementById('nameError'), 'Full name can only contain alphabets and spaces.')) {
            isValid = false;
        }

        if (!validateField(mobileNumber, /^\d{10}$/, document.getElementById('mobileError'), 'Mobile number must be exactly 10 digits.')) {
            isValid = false;
        }

        if (!validateField(pincode, /^\d{6}$/, document.getElementById('pincodeError'), 'Pincode must be exactly 6 digits.')) {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
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