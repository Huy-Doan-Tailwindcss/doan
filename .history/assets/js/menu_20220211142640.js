$(document).ready(function() {
    $('.icon-menu-bar').toggleCicker(function() {
        $('.menu').toggleClass('laptop:hidden');
        $(this).html('<i class="uil uil-times text-gray"></i>');
    })
})