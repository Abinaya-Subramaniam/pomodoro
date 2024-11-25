let timerMinutes = 25; 
let timerSeconds = 0;
let timerInterval;
let points = 0;


const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const pointsDisplay = document.getElementById("points");
const badgesContainer = document.getElementById("badgesContainer");

let isRunning = false;


startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
});


resetBtn.addEventListener("click", resetTimer);

function updateTimer() {
  if (timerSeconds === 0) {
    if (timerMinutes === 0) {
      completePomodoro();
      clearInterval(timerInterval);
      isRunning = false;
    } else {
      timerMinutes--;
      timerSeconds = 59;
    }
  } else {
    timerSeconds--;
  }
  updateDisplay();
}

function updateDisplay() {
  const minutes = timerMinutes.toString().padStart(2, "0");
  const seconds = timerSeconds.toString().padStart(2, "0");
  timeDisplay.textContent = `${minutes}:${seconds}`;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerMinutes = 25;
  timerSeconds = 0;
  isRunning = false;
  updateDisplay();
}


function completePomodoro() {
  points += 10; 
  pointsDisplay.textContent = points;


  if (points % 30 === 0) {
    addBadge(`Badge ${points / 30}`);
  }

  alert("Pomodoro session complete! Great job!");
}

function addBadge(badgeName) {
  const badge = document.createElement("div");
  badge.textContent = badgeName;
  badgesContainer.appendChild(badge);
}
