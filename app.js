const container = document.querySelector(".container");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".secs");
const startBtn = document.querySelector(".btn-start");
const resetBtn = document.querySelector(".btn-reset");

let setTimer = null;
let working = true;

//reset default function
function resetDefault() {
  seconds.value = "00";

  minutes.value = "00";

  container.style.backgroundColor = "rgba(255, 255, 255, 0.158)";
  clearTimer();
  working = true;
  seconds.removeAttribute("disabled");
  minutes.removeAttribute("disabled");
}

//reset button
resetBtn.addEventListener("click", () => {
  resetDefault();
  startBtn.textContent = "start";
});

//start button
startBtn.addEventListener("click", () => {
  if (working) {
    seconds.setAttribute("disabled", "");
    minutes.setAttribute("disabled", "");
    working = false;
    if (minutes.value != 0 || seconds.value != 0) {
      startBtn.innerHTML = "pause &#9208;";
      function startTime() {
        setTimer = setInterval(timer, 1000);
      }
      startTime();
    }
  } else {
    // startBtn.textContent = 'stop';
    working = true;
    clearTimer();
    startBtn.innerHTML = "start &#9654;";
  }
});

//timer function
function timer() {
  if (seconds.value == 0 && minutes.value == 0) {
    resetDefault();
  } else if (seconds.value != 0) {
    if (minutes.value == 0 && seconds.value <= 5) {
      container.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
      container.style.transition = "all 1s linear";
    }
    seconds.value--;
  } else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value--;
  }
}

//this function clears the interval timer
function clearTimer() {
  clearInterval(setTimer);
}
