const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 4000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
});