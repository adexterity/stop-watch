const container = document.querySelector(".container");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".secs");
const startBtn = document.querySelector(".btn-start");
const resetBtn = document.querySelector(".btn-reset");

let setTimer = null;
let working = true;

//reset default function 
function resetDefault(){
  
  seconds.value = 0;

  minutes.value = 0;

  container.style.backgroundColor = "rgba(255, 255, 255, 0.158)";
  clearTimer();
  working = true;
}


//reset button 
resetBtn.addEventListener("click", () => {
  resetDefault();
});


//start button
startBtn.addEventListener("click", () => {
  if(working){
    working = false;
  if(minutes.value!= 0 || seconds.value != 0){
  function startTime() {
    setTimer = setInterval(timer, 1000);
  }
  startTime();
  }
  
  }
});


//timer function 
function timer() {
  if (seconds.value == 0 && minutes.value == 0) {
    resetDefault()
   
  } else if (seconds.value != 0) {
    if (minutes.value == 0 && seconds.value <= 5) {
      container.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
      container.style.transition = "all 1s linear";
    }
    seconds.value--;
  } else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value -= 1;
  }
}

function clearTimer() {
  clearInterval(setTimer);
}
