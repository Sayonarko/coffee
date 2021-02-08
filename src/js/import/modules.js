import Swiper from "swiper";

var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 1000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
});