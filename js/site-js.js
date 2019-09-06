//show back to top icon when user scrolls past the window height
var $topLink = $('.top-link');
var $window = $(window);
var winHeight = $window.height(); // Gets the window height
winHeight = winHeight / 2;
$window.on("scroll", function () {
    if ($(this).scrollTop() > winHeight ) {
        $topLink.addClass("showOn");
    } else {
        $topLink.removeClass("showOn");
    }
}).on("resize", function() {
    // If the user resizes the window, get the height
    winHeight = $(this).height();
});

//animate smooth scroll to top
$('.top-link a').on('click', function(e) {
    e.preventDefault();
    const header = $('#header').position().top;
    $('html, body').animate({
        scrollTop: header
    }, 900);
});