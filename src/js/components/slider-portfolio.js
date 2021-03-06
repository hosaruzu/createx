import Swiper, { Navigation } from 'swiper';

const portSlider = document.querySelector('.portfolio-section__items');

Swiper.use([Navigation]);
const portfolioSlider = new Swiper(portSlider, {
  on: {
    init() {
      const activeSlide = portSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
    },
  },
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
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

if (portSlider) {
  document
    .querySelector('.portfolio-section__prev')
    .addEventListener('click', () => {
      const activeSlide = portSlider.querySelector('.swiper-slide-next');

      document
        .querySelectorAll('.portfolio-section__items .swiper-slide')
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
    .querySelector('.portfolio-section__next')
    .addEventListener('click', () => {
      const activeSlide = portSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      document
        .querySelectorAll('.portfolio-section__items .swiper-slide')
        .forEach((el) => {
          el.classList.remove('slider-visible');
        });

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
    });
}
