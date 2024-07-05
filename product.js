$(document).ready(function() {
    // Thumbnail click event
    $('.thumbnail').click(function() {
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');
        $('#main-image').attr('src', $(this).data('main-image-src'));
    });

    // Back to top functionality
    $('.backtop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

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
});
});
