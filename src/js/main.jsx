import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import '../styles/index.css'

import Home from './components/Home';

let root = ReactDOM.createRoot(document.getElementById("root"))

let contador = 0
let inputStartValue = 0; 
let timer = null; 
let targetTime = null;
let inputTargetValue = 0;


function handleTargetInput(value) {
   const numericValue = parseInt(value, 10);
  if (!isNaN(numericValue)) {
    inputTargetValue = numericValue;
  } else {
    inputTargetValue = 0; 
  }
}

function setTarget() {
  targetTime = inputTargetValue;
}

function handleInputEntry(value) {
  const numericValue = parseInt(value, 10);
  if (!isNaN(numericValue)) {
    inputStartValue = numericValue;
  } else {
    inputStartValue = 0; 
  }
}

function setTimer() {
  contador = inputStartValue;
  inputStartValue = 0;
  startTimer();
  renderCounter(); 
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  contador = 0;
  inputStartValue = 0;
  renderCounter();
}

function startTimer() {
  if (timer !== null) {
    return;
  }
  
  timer = setInterval(() => {
    contador++; 
    renderCounter(); 
  }, 1000);
}


function renderCounter() {
  const six = Math.floor((contador/100000) % 10);
  const five = Math.floor((contador/10000) % 10);
  const four = Math.floor((contador/1000) % 10);
  const three = Math.floor((contador/100) % 10);
  const two = Math.floor((contador/10) % 10);
  const one = Math.floor((contador/1) % 10);

  if (targetTime !== null & contador === targetTime) {
    alert(`You just reached ${targetTime} seconds!`)

    stopTimer();
    targetTime = null;
    
  }
  
  root.render(
    <React.StrictMode>
      <Home 
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
        digitFive={five}
        digitSix={six}
        onInputChange={handleInputEntry}
        setTimerAction={setTimer}
        startAction={startTimer}
        stopAction={stopTimer}
        resetAction={resetTimer}
        onTargetInputChange={handleTargetInput}
        setTargetAction={setTarget}
      />
    </React.StrictMode>
  );
}

renderCounter();

startTimer();