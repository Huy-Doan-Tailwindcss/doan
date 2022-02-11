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
        else{
            $(this).html('<i class="uil uil-bars text-gray"></i>');
            console.log(cls);
        }
        // console.log(iconBar.hashClass('laptop:hidden'))
        // if(this.hashClass('laptop:hidden')) {
        //     $(this).html('<i class="uil uil-bars text-gray"></i>');
        //     alert('ok')
        // }
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