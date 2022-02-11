$(document).ready(function() {
    const iconBar = $('.icon-menu-bar');
    iconBar.click(function() {
        const menu = $('.menu');
        menu.toggleClass('laptop:hidden');
        let cls = 1;
        if(cls == 1){
            $(this).html('<i class="uil uil-times text-gray"></i>');
            cls += 1;
            console.log(cls);
        }
        if(cls == 2) {
            $(this).html('<i class="uil uil-bars text-gray"></i>');
            cls -= 1;
            console.log(cls);
        }
    })
})