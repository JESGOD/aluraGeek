function detectarTamañoPantalla() {
  
  if (screen.width < 600) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      speed:2500,
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
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed:3000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      /* pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, */
    });
  }
}

detectarTamañoPantalla();

window.addEventListener("resize", () => {
  detectarTamañoPantalla();
});
