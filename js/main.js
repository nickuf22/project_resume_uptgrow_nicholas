//Allows user to scrollup page with ease
jQuery(document).ready(function () {
    jQuery.goup();
});

//Allows user to zoom image to get a closer look
$('#zoom').elevateZoom();

//Hides image when clicked to save space when scrolling, especially on mobile
$(document).ready(function () {
    $('img').click(function () {
        $(this).hide();
    });
});
