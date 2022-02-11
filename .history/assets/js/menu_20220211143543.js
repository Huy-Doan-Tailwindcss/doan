$(document).ready(function() {
    $('.icon-menu-bar').click(function() {
        const menu = $('.menu');
        menu.toggleClass('laptop:hidden');
        $(this).html('<i class="uil uil-times text-gray"></i>');
        if(menu.hashClass('laptop:hidden')) {
            $(this).html('<i class="uil uil-bars text-gray"></i>');
        }
        // console.log(click);
        // if(click == 1) {
            
        //     click = 2;
        // }
        // else {
        //     $(this).html('<i class="uil uil-bars text-gray"></i>');
        //     console.log(click);
        // }
    })
})