const circles = document.querySelectorAll(".facts-element__circle");

circles.forEach((el) => {
  let progress = el.querySelector(".progress");
  let radius = progress.getAttribute("r");
  let circleLength = 2 * Math.PI * radius;
  progress.setAttribute("stroke-dasharray", circleLength);
  let percent = el.dataset.percent;
  let percentageProgress = Math.floor(percent);
  progress.setAttribute(
    "stroke-dashoffset",
    circleLength - (circleLength * percentageProgress) / 100
  );
});
