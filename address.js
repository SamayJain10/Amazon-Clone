document.getElementById('addressForm').addEventListener('submit', function(event) {
    var fullName = document.getElementById('fullName').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var pincode = document.getElementById('pincode').value;
    
    var namePattern = /^[A-Za-z\s]+$/;
    var mobilePattern = /^\d{10}$/;
    var pincodePattern = /^\d{6}$/;
    
    document.getElementById('nameError').textContent = '';
    document.getElementById('mobileError').textContent = '';
    document.getElementById('pincodeError').textContent = '';

    if (!namePattern.test(fullName)) {
        alert('Full name can only contain alphabets.');
        event.preventDefault();
    }
    
    if (!mobilePattern.test(mobileNumber)) {
        alert('Mobile number must be 10 digits.');
        event.preventDefault();
    }
    
    if (!pincodePattern.test(pincode)) {
        alert('Pincode must be 6 digits.');
        event.preventDefault();
    }
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