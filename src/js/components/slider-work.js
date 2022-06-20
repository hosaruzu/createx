import Swiper from "swiper/bundle";

const workImages = document.querySelector(".work-slider__items--big");
const workThumbs = document.querySelector(".work-slider__items--small");

if (workImages) {
  const workSLider = new Swiper(workThumbs, {
    spaceBetween: 20,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const workSliderNav = new Swiper(workImages, {
    spaceBetween: 20,
    navigation: {
      nextEl: ".work-slider__next",
      prevEl: ".work-slider__prev",
    },
    thumbs: {
      swiper: workSLider,
    },
  });
}
