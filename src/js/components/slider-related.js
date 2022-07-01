import Swiper, { Navigation } from 'swiper';

const relatedSlider = document.querySelector('.related-projects__items');

Swiper.use([Navigation]);
const servicesSlider = new Swiper(relatedSlider, {
  on: {
    init() {
      const activeSlide = relatedSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
    },
  },
  slidesPerView: '1',
  spaceBetween: 30,
  navigation: {
    nextEl: '.related-projects__next',
    prevEl: '.related-projects__prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

if (relatedSlider) {
  document.querySelector('.related-projects__prev').addEventListener('click', () => {
    const activeSlide = relatedSlider.querySelector('.swiper-slide-next');

    document
      .querySelectorAll('.related-projects__items .swiper-slide')
      .forEach((el) => {
        el.classList.remove('slider-visible');
      });

    if (activeSlide.previousElementSibling) {
      const nextActiveSlide = activeSlide.previousElementSibling;
      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      activeSlide.nextElementSibling.classList.add('slider-visible');
    }
  });

  document
    .querySelector('.related-projects__next')
    .addEventListener('click', () => {
      const activeSlide = relatedSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      document
        .querySelectorAll('.related-projects__items .swiper-slide')
        .forEach((el) => {
          el.classList.remove('slider-visible');
        });

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
    });
}
