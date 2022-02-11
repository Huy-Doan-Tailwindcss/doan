$(document).ready(function() {
    $('.icon-menu-bar').click(function() {
        $('.menu').toggleClass('laptop:hidden');
        $('.icon-bar').innerHTML = '<i class="uil uil-times text-gray"></i>';
    })
})