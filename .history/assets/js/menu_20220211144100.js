$(document).ready(function() {
    const iconBar = $('.icon-menu-bar');
    iconBar.click(function() {
        const menu = $('.menu');
        menu.toggleClass('laptop:hidden');
        $(this).html('<i class="uil uil-times text-gray"></i>');
        if(iconBar.hashClass('laptop:hidden') == false) {
            $(this).html('<i class="uil uil-bars text-gray"></i>');
            alert('ok')
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