function detectarTamañoPantalla() {
  const sc = screen.width;

  if (sc < 600) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 2500,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      /*  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, */
    });
  } else {
    if (sc < 1150) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 3000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    } else {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 3000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    }
  }
}

detectarTamañoPantalla();

window.addEventListener("resize", () => {
  detectarTamañoPantalla();
});
