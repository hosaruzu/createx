import Swiper from 'swiper/bundle';

const workImages = document.querySelector('.work-images-slider');

if (workImages) {
  const workSlider = new Swiper('.work-images-nav', {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 10,
      },
    },
  });
  const workSlidesNav = new Swiper(workImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.work-images__next',
      prevEl: '.work-images__prev',
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}
