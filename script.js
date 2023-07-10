'use strict';

// Obținem elementele DOM pentru afișarea timpului
let hoursDisplay = document.getElementById("hours");
let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");

// Variabile pentru a stoca timpul curent și intervalul pentru cronometru
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

// Funcție pentru a actualiza afișarea timpului
function updateDisplay() {
  hoursDisplay.textContent = formatTime(hours);
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
}

// Funcție pentru a formata timpul ca două cifre
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Funcție pentru a începe cronometrul
function startTimer() {
  interval = setInterval(function() {
    if (seconds === 59) {
      seconds = 0;
      minutes++;
    } else {
      seconds++;
    }
    
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    
    updateDisplay();
  }, 1000);
}

// Funcție pentru a opri cronometrul
function stopTimer() {
  clearInterval(interval);
}

// Funcție pentru a reseta cronometrul
function resetTimer() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

// Obținem butoanele din HTML
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");

// Adăugăm event listener pentru butoane
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
