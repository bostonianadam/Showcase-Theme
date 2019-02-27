//animate smooth scroll to top
$('#top-link a').on('click', function(e) {
    e.preventDefault();
    const header = $('#header').position().top;
    $('html, body').animate({
        scrollTop: header
    }, 900);
});