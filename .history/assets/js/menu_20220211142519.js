$(document).ready(function() {
    $('.icon-menu-bar').click(function() {
        $('.menu').toggleClass('laptop:hidden');
        $(this).html('<i class="uil uil-times text-gray"></i>');
    })
})