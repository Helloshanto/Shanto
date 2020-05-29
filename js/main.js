var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 20,
  watchSlidesProgress: true,
  centeredSlidesBounds: true,
  centeredSlides: true,
  loop: true, 
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});


