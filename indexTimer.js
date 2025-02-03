const startButton = document.querySelector(`.start`)

const stopButton  = document.querySelector(`.stop`)

const resetButton = document.querySelector(`.reset`)

const changeValue = document.querySelector(`.time`)

const userInput = document.querySelector(`#input-field`)

startButton.addEventListener("click", startCounting)

stopButton.addEventListener(`click`, stopCounting)

resetButton.addEventListener(`click`, resetCounting)


//function untuk mengubah format yang diinput user dari second ke menit
function secondsToMMSS(seconds) {
    const minutes = Math.floor(seconds /60);
    const remainingSeconds = seconds % 60;
    
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(remainingSeconds).padStart(2, '0');
    
    return `${displayMinutes}:${displaySeconds}`;
}


//
let timerInSecond = 0

changeValue.textContent = secondsToMMSS(timerInSecond)

let intervalId
//

function resetCounting(){
    clearInterval(intervalId)
    userInput.value = ``
    changeValue.textContent = `00:00`
}

//
function startCounting(){         // start button
    if (userInput.value === ``){
        alert(`Please enter a number`)
        return
    }
    if (intervalId){
        clearInterval(intervalId)
    }
  timerInSecond = parseInt(userInput.value) * 60
  
  intervalId = setInterval(decreaseTimer, 1000)
}


function stopCounting(){         // stop button
    clearInterval(intervalId)
}

//function untuk mengurangi timer yang diinput
function decreaseTimer(){
    if (timerInSecond  === 0){
        clearInterval(intervalId)
        alert (`Time is up`);
        userInput.value = ``
    }
    
    else{
        timerInSecond = timerInSecond-1
        changeValue.textContent = secondsToMMSS(timerInSecond)
    
    }
}
//function rumus untuk mengurangi 1 per 1 angka yang diinput user
// intervalId = setInterval(decreaseTimer, 1000);


//stop function
// clearInterval(intervalId);
