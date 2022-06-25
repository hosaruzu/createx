import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);
const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: '1',
  loop: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});
