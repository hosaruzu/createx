/* eslint-disable no-undef */
/* eslint-disable no-new */
const selects = document.querySelectorAll('.form-label__select');

selects.forEach((el) => {
  new Choices(el, {
    shouldSort: false,
    position: 'bottom',
    searchEnabled: false,
    allowHTML: true,
  });
});
