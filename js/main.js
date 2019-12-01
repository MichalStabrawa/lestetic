$(document).ready(function() {
  $(".your-class").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    fade: true,
  });

  $(".hamburger").click(function() {
    $(".navbar").slideToggle(500);
  });

  $(".col-content").mouseenter(function() {
    $(this).find(".cards-title-content")
      .css("display", "none");
    $(this).find(".cards-price")
      .fadeIn(500);
    $(this).find(".cards-content-next")
      .fadeIn(600);
       $(this).find(".cards-content-next")
      .fadeIn(600);
      $(this).find("img").css("transform","scale(1.1)");
     
   
  });

  $(".col-content").mouseleave(function() {
    $(this).find(".cards-title-content")
      .fadeIn(500);
    $(this).find(".cards-price")
      .css("display","none");
    $(this).find(".cards-content-next")
      .css("display","none");
      $(this).find("img").css("transform","scale(1)");
      
  });
});

console.log(window.location.pathname);
