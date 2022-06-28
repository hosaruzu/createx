/* eslint-disable no-unused-vars */
import Swiper, { Navigation, Pagination } from 'swiper';

const heroSliderSpeed = 1500;
const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed');

document.body.style.setProperty('--hero-slider-speed', `${heroSliderSpeed}ms`);

Swiper.use([Navigation, Pagination]);
const heroSlide = new Swiper('.hero-slider', {
  slidesPerView: '1',
  // autoplay: {
  //   delay: 3000,
  // },
  speed: heroSliderSpeed,
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  on: {
    init() {
      const paginationBullets = document.querySelectorAll('.hero__pagination .swiper-pagination-bullet');

      paginationBullets.forEach((el) => {
        const paginationBulletElement = el;
        paginationBulletElement.innerHTML = '<span class="hero__bar"></span>';
      });
    },
  },
});
