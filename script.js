const progressBar = document.querySelector(".progress-bar");
const computedStyle = getComputedStyle(progressBar);

let currentWidth;

// FAKE LOADING METHOD - time amount is in milliseconds
var intervalID = setInterval(() => {
  // get current width of progress bar and increment it
  if (currentWidth >= 100.0) {
    unload();
  }

  currentWidth = parseFloat(computedStyle.getPropertyValue("--width")) || 0;

  progressBar.style.setProperty("--width", currentWidth + 0.1);
  console.log(currentWidth);
}, 5);

const unload = () => {
  clearInterval(intervalID);
  console.log("loading done");

  return;
};
