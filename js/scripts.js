$(document).ready(function(){
    
    // HERO SVG-ARROWS TO THE NEXT SECTION
    $('.scroll--down').click(function() {

        $('html, body').animate({ scrollTop: $('.js--section--series').offset().top}, 800);
    
    });

    // BUTTON TO THE TOP
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){

            $('.js--btn--top').fadeIn('fast');
        }else{
            $('.js--btn--top').fadeOut('fast');
        }
    });
    $('.js--btn--top').click(function() {

        $('html, body').animate({ scrollTop: $('.js--navbar').offset().top}, 800);

    });

});



