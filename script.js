let intervalId;
let minutes = 25;
let seconds = 0;

function updateTimer() {
  const timerElement = document.getElementById('timer');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  if (seconds === 0 && minutes === 0) {
    clearInterval(intervalId);
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
}

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  minutes = 25;
  seconds = 0;
  updateTimer();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

resetTimer(); // Initialize the timer on page load
