$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        fade: true
    });

    $('.hamburger').click(function(){
        $('.navbar').slideToggle(500)
        
    })
})