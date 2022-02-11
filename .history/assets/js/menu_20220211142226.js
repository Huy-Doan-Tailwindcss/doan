$(document).ready(function() {
    $('.icon-menu-bar').click(function() {
        $('.menu').toggleClass('laptop:hidden');
        $('.icon-menu-bar').children().innerHTML = '<i class="uil uil-times text-gray"></i>';
    })
})