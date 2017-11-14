$(document).ready(function(){
    var brandLogo = $('.navbar-brand');
    var nav = $('.navbar');
    navStickyCheck();

    $(window).on('scroll', navStickyCheck);
    function navStickyCheck(){
        var windowTop = $(window).scrollTop();
        if(windowTop >= 50){
            nav.addClass('nav-active');
            brandLogo.addClass('navbar-brand_sticky');
        }
        else{
            nav.removeClass('nav-active');
            brandLogo.removeClass('navbar-brand_sticky');
        }
    }
});
