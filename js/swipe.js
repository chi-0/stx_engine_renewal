(() => {

  const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    loop: false,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const NewsSwiper = new Swiper('.news_swiper', {
    loop: false,
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
  });

})();