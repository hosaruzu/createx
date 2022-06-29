/* eslint-disable no-unused-vars */
import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('.to-top');
const toTop = document.querySelector('.to-top');

const isVisibleToTop = () => {
  const heroHeight = document.querySelector('.hero, .page-hero').offsetHeight;
  const y = window.scrollY;

  if (y >= heroHeight) {
    toTop.classList.add('to-top--active');
  } else {
    toTop.classList.remove('to-top--active');
  }
};
window.addEventListener('scroll', () => {
  isVisibleToTop();
});
