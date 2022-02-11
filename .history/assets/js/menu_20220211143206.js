$(document).ready(function() {
    $('.icon-menu-bar').click(function() {
        $('.menu').toggleClass('laptop:hidden');
        const click = 1;
        console.log(click);
        if(click == 1) {
            $(this).html('<i class="uil uil-times text-gray"></i>');
            click = 2;
        }
        else {
            $(this).html('<i class="uil uil-bars text-gray"></i>');
            console.log(click);
        }
    })
})