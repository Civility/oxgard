jQuery(document).ready(function($) {
$('#s1').slick({
  autoplay:true,
  autoplaySpeed:2000, 
  speed:4500,
  cssEase: 'ease-in',
  lazyLoad: 'ondemand',
  focusOnSelect: true,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,

  /*centerPadding: '50px',*/
  slidesToShow: 3,
  initialSlide:1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
        settings: {
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
                adaptiveHeight: true,
      }
    },
    {
      breakpoint: 480,
        settings: {
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
                slidesToShow: 1,
        slidesToScroll: 1

      }
    }
  ]
});

$('#s2').slick({
     
autoplay:true,
autoplaySpeed:2500, 
speed:3500,
cssEase: 'ease-in',
slidesToShow: 3,
 responsive: [
    {
      breakpoint: 768,
      settings: {
        fade: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      fade: true,
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

 /*открывает картинки для большого просмотра*/
  
$(".pop").magnificPopup({
    type : 'image',
    gallery : {
      enabled : true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });
  
});