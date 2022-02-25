const swiper = new Swiper('.swiper', {
  preloadImages: false,
  slidesPerView: 2,
  loop: true,
  spaceBetween: 50,
  grabCursor: true,
  mousewheel: false,
  centeredSlides: true,
  navigation: {
    nextEl: '#next',
    prevEl: '#prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },

  }
})