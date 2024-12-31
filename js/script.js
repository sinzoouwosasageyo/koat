var swiper = new Swiper(".swiper",{
  effect:"fade",
  loop: true,
  autoplay: {
    delay: 4000,
  },
});

var fixed = new EzenScrollClass(".top",{
  baseline: 50,
});

var menubtn = new EzenAddClass("#link");

var swiper2 = new Swiper(".link_swiper",{
  wrapperClass:"link_wrapper",
  slideClass:"link_slide",
  slideActiveClass:"active",
  slidesPerView: 6,	
  loop: true,
  spaceBetween: 74,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var puaseButton = document.getElementById("puase")
      puaseButton.addEventListener("click", (event) => {
        swiper.autoplay.pause()
      })