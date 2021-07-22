$(function(){
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        
    });

    // $('.open__popup').click(function(e){
    //     e.preventDefault();
    //     $('.popup-bg__services').fadeIn(300);
    //     $('html').addClass('no-scroll');
    // })
    // $('.close__popup').click(function(){
    //     $('.popup-bg__services').fadeOut(300);
    //     $('html').addClass('no-scroll');
    // })
 

    $('select').styler();
    
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
      });




});

   