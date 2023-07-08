// Declaraciones en deshuso
// $(document).ready(function () {
//     $('img').click(function ()

// forma correcta
$(function () {
    $(document).on('click', 'img', function () {
        if ($(this).hasClass('big')) {
            $(this).animate({
                width: "10rem",
                height: "10rem"
            }, 200);
            $(this).removeClass('big');
        } else {
            $(this).animate({
                width: "20rem",
                height: "20rem"
            }, 200);
            $(this).addClass('big');
        }
    });
});