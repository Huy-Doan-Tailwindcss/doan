$(document).ready(function() {
    $('.icon-menu-bar').click(function() {
        $('.menu').toggleClass('laptop:hidden');
        var click = 1;
        if(click === 1) {
            $(this).html('<i class="uil uil-times text-gray"></i>');
            click = 0;
        }
    })
})