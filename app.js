// Query selectors for slider control buttons
const leftBtn = document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");

// Add event listener for right button click to scroll product slides to the right
rightBtn.addEventListener("click", function(event) {
    const content = document.querySelector(".product-slide");
    content.scrollLeft += 1100; // Scroll right by 1100 pixels
    event.preventDefault(); // Prevent default action (e.g., link navigation)
});

// Add event listener for left button click to scroll product slides to the left
leftBtn.addEventListener("click", function(event) {
    const content = document.querySelector(".product-slide");
    content.scrollLeft -= 1100; // Scroll left by 1100 pixels
    event.preventDefault(); // Prevent default action
});

// Additional buttons for other sets of product slides
const leftBtn1 = document.querySelector(".btn-1b");
const rightBtn1 = document.querySelector(".btn-1a");

// Handling the right scroll for the second set of product slides
rightBtn1.addEventListener("click", function(event) {
    const content = document.querySelector(".product-slide-1");
    content.scrollLeft += 1100;
    event.preventDefault();
});

// Handling the left scroll for the second set of product slides
leftBtn1.addEventListener("click", function(event) {
    const content = document.querySelector(".product-slide-1");
    content.scrollLeft -= 1100;
    event.preventDefault();
});

// Buttons for the third set of product slides
const leftBtn2 = document.querySelector(".btn-1c");
const rightBtn2 = document.querySelector(".btn-1d");

// Right scroll for the third set of product slides
rightBtn2.addEventListener("click", function(event) {
    const content = document.querySelector(".product-slide-2");
    content.scrollLeft += 1100;
    event.preventDefault();
});

// Left scroll for the third set of product slides
leftBtn2.addEventListener("click", function(event) {
    const content = document.querySelector(".product-slide-2");
    content.scrollLeft -= 1100;
    event.preventDefault();
});

// 'Back to top' button functionality
const backtop = document.querySelector(".backtop");
backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll to top
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
    cross.style.display = 'block'; // Show close button
    black.classList.add("active");
    document.body.classList.add("stop-scroll"); // Stop scrolling on the body
});

// Event listener to close the sidebar
cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    cross.style.display = 'none'; // Hide close button
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll"); // Resume scrolling on the body
});

// Handling user menu visibility toggle
document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.querySelector('.ac');  
    const triangleButton = document.querySelector('.triangle');  
    const userMenu = document.querySelector('.user-menu');
    const blackOverlay = document.querySelector('.black');

    // Function to toggle the visibility of the user menu
    function toggleUserMenu() {
        userMenu.classList.toggle('active');
        triangleButton.classList.toggle('active');
        blackOverlay.classList.toggle('active-1');
        document.body.classList.toggle('stop-scroll');
    }

    // Check if elements exist to avoid errors
    if (signInButton && userMenu && triangleButton && blackOverlay) {
        signInButton.addEventListener('click', toggleUserMenu);
        triangleButton.addEventListener('click', toggleUserMenu);
    } else {
        console.error('One or more interactive elements are missing!');
    }

    // Add event listener for clicking outside the user menu to close it
    document.addEventListener('click', function(event) {
        if (!userMenu.contains(event.target) && !signInButton.contains(event.target) && !triangleButton.contains(event.target)) {
            userMenu.classList.remove('active');
            triangleButton.classList.remove('active');
            blackOverlay.classList.remove('active-1');
            document.body.classList.remove('stop-scroll');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all <li> elements
    const listItems = document.querySelectorAll('li');

    // Set tabindex="0" for each <li> element
    listItems.forEach(item => {
        item.setAttribute('tabindex', '0');
    });
});

// Add keydown event listener to all elements that have tabindex="0"
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll('[tabindex="0"]');

    focusableElements.forEach(elem => {
        elem.addEventListener('keydown', function(event) {
            if (event.key === "Enter" || event.keyCode === 13) {
                this.click();
            }
        });
    });
});

