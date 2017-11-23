$(document).ready(function(){
    $('.article, .header').each(function(){
        var article = $(this),
            articleTop = $(this).offset().top,
            articleHeight = $(this).height();
        $(window).on('resize', function(){
            article = $(this);
            articleTop = $(this).offset().top;
            articleHeight = $(this).height();
        })
        setActiveMenuLink();
        $(window).on('scroll', setActiveMenuLink);

        function setActiveMenuLink(){
            var windowTop = $(window).scrollTop();
            if(windowTop +30 > articleTop && windowTop < articleTop + articleHeight -30){
                var articleId = article.attr('id');
                var relatedLink = $('a[href="#'+articleId+'"]');
                $('.nav-link').removeClass('active').blur();
                relatedLink.addClass('active');
            }
        }
    })

})
