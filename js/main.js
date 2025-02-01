$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.burger').toggleClass('active')
        $('.burger__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })

    $('.menu__item').on('click', function() {
        $('.burger , .burger__menu').removeClass('active')
        $('body').removeClass('lock')
    
    })
    $('.block__title').on('click', function() {
        if($('.acardeon-block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active')
            $('.block__text').not($(this).next()).slideUp(300)
        }


        $(this).toggleClass('active').next().slideToggle(300)
    })

   /* $('.cards__img').on('mouseenter', function() {
        $('.cards__img').next().fadeToggle(1000)
    })*/
    
    $('.slider').slick({
        arrows : true ,
        adaptiveHeight : true,
        speed : 500 ,
        autoplay : false ,
        autoplaySpeed : 1500 ,
    })

    $('.slider__2').slick({
        arrows : true ,
        adaptiveHeight : true,
        speed : 500 ,
        autoplay : false ,
        autoplaySpeed : 1500 ,
    })

    
   
})