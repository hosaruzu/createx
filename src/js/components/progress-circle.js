const circles = document.querySelectorAll('.facts-element__circle');

circles.forEach((el) => {
  const progress = el.querySelector('.progress');
  const radius = progress.getAttribute('r');
  const circleLength = 2 * Math.PI * radius;
  progress.setAttribute('stroke-dasharray', circleLength);
  const { percent } = el.dataset;
  const percentageProgress = Math.floor(percent);
  progress.setAttribute(
    'stroke-dashoffset',
    circleLength - (circleLength * percentageProgress) / 100,
  );
});
