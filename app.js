$(document).ready(function() {
    // Explicitly hide the xmark when the document is ready
    $('.fa-xmark').hide();

    // Sidebar toggle functionality
    $('.nav-1 div').click(function() {
        $('.sidebar').toggleClass('active');
        $('.fa-xmark').toggle(); // Toggle visibility of the xmark
        $('.black').toggleClass('active');
        $('body').toggleClass('stop-scroll');
    });

    // Close sidebar when xmark is clicked
    $('.fa-xmark').click(function() {
        $('.sidebar').removeClass('active');
        $('.fa-xmark').hide();  // Ensure the xmark is hidden when sidebar is closed
        $('.black').removeClass('active');
        $('body').removeClass('stop-scroll');
    });

    // Back to top functionality
    $('.backtop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    // Product slides
    $('.r-btn').click(function(event) {
        event.preventDefault();
        $(this).siblings('.product-slide').animate({ scrollLeft: '+=1100' }, 'smooth');
    });

    $('.l-btn').click(function(event) {
        event.preventDefault();
        $(this).siblings('.product-slide').animate({ scrollLeft: '-=1100' }, 'smooth');
    });

    // User menu toggle
    $('.ac').click(function() {
        $('.user-menu').toggleClass('active');
        $('.triangle').toggleClass('active');
        $('.black').toggleClass('active-1');
        $('body').toggleClass('stop-scroll');
    });
});
