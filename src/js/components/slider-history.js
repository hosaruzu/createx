import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const historySlider = new Swiper(".history-slider", {
  slidesPerView: "1",
  navigation: {
    nextEl: ".history__next",
    prevEl: ".history__prev",
  },
});

const historyBtns = document.querySelectorAll(".history-nav__btn");

historyBtns.forEach((el, idx) => {
  el.setAttribute("data-index", idx);

  el.addEventListener("click", (e) => {
    const index = e.currentTarget.dataset.index;

    historyBtns.forEach((el) => {
      el.classList.remove("history-nav__btn--active");
    });

    e.currentTarget.classList.add("history-nav__btn--active");
    historySlider.slideTo(index);
  });
});

historySlider.on("slideChange", function () {
  historyBtns.forEach((el) => {
    el.classList.remove("history-nav__btn--active");
  });

  document
    .querySelector(`.history-nav__btn[data-index="${historySlider.realIndex}"]`)
    .classList.add("history-nav__btn--active");
});
