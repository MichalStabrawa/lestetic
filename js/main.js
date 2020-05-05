$(document).ready(function () {
  
  var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
  alert(isIE11);

  if(isIE11) {
    alert("IE 11")
  }
  else {
    alert("Inna ")
  }


  $(".your-class").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    fade: true,
  });

  $(".hamburger").click(function () {
    $(".navbar").slideToggle(500);
  });

  $(".col-content.show").mouseenter(function () {
    $(this).find(".cards-title-content")
      .css("display", "none");
    $(this).find(".cards-price")
      .fadeIn(500);
    $(this).find(".cards-content-next")
      .fadeIn(600);
    $(this).find(".cards-content-next")
      .fadeIn(600);
    //  $(this).find("img").css("transform","scale(1.1)");
    $(this).find("img").addClass("active")

  });

  $(".col-content.show").mouseleave(function () {
    $(this).find(".cards-title-content")
      .fadeIn(500);
    $(this).find(".cards-price")
      .css("display", "none");
    $(this).find(".cards-content-next")
      .css("display", "none");
    //  $(this).find("img").css("transform","scale(1)");
    $(this).find("img").removeClass("active")
  });


});


console.log(window.location.pathname);
console.log("TEST IE")