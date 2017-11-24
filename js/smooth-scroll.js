$(document).ready(function(){
    $('.nav-link').on('click', function(event){
        $('.navbar-collapse').removeClass('show');
        var target = this.hash.slice(1),
            hash = this.hash,
            targetElement = $('#'+target),
            targetTop = targetElement.offset().top;
        $('html, body').animate({ scrollTop: targetTop }, 600, history.pushState(null,null,hash));
        targetElement.focus();
        if (targetElement.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            targetElement.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            targetElement.focus(); // Set focus again
        };
        event.preventDefault();
    })
})
