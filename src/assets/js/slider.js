import $ from "jquery";
import "slick-carousel";

$(".slider").slick({
  arrows: true,
  dots: true,
  slidesToShow: 1,
  speed: 1000,
  autoplaySpeed: 800,
  responsive: [
    {
      breakpoint: 839,
      settings: {},
    },
  ],
});
