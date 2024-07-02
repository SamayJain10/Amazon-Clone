document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
            mainImage.src = thumbnail.getAttribute('data-main-image-src');
        });
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