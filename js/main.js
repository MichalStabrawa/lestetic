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

    $('.cards-item').mouseover(function(){
        $(".cards-price").fadeIn().css('dispaly','flex');
        $(".cards-title-content").fadeOut()
      });
      $('.cards-item').mouseout(function(){
        $(".cards-price").fadeOut(); 
      })
})

console.log(window.location.pathname)