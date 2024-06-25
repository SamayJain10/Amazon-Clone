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
const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".user-menu");

sign.addEventListener("click", () => {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
});
