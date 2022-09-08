const hoursInHtml = document.querySelector('.hours');
const minutesInHtml = document.querySelector('.minutes');
const secondsInHtml = document.querySelector('.seconds');
const millisecondsInHtml = document.querySelector('.milliseconds');
const results = document.querySelector('.results');

const startButton = document.querySelector('.start');
const circleButton = document.querySelector('.circle');
const stopButton = document.querySelector('.stop');
const resetResults = document.querySelector('.reset__results');

let hours = 00;
let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let interval;
let count = 0;

function startTimer() {
    changeMillisecond();
}

function finishCircle() {
    count += 1;
    document.querySelector('.results').innerHTML += `${count}: ${hours} ч | ${minutes} мин | ${seconds} сек | ${milliseconds} мс<br>`;
    stopTimer();
    startTimer();
}


function stopTimer() {
    millisecondsInHtml.innerText = `00`;
    secondsInHtml.innerText = `00`;
    minutesInHtml.innerText = `00`;
    hoursInHtml.innerText = `00`;
    hours = 00;
    minutes = 00;
    seconds = 00;
    milliseconds = 00;
    return;
}


function changeMillisecond() {
    milliseconds++;
    if (milliseconds < 10) {
        millisecondsInHtml.innerText = `0${milliseconds}`;
    } else if (milliseconds > 99) {
        milliseconds = 0;
        changeSecond();
    } else {
        millisecondsInHtml.innerText = `${milliseconds}`;
    }


}

function changeSecond() {
    seconds++;
    if (seconds < 10) {
        secondsInHtml.innerText = `0${seconds}`;
    } else if (seconds > 60) {
        seconds = 0;
        changeMinutes();
    } else {
        secondsInHtml.innerText = `${seconds}`;
    }


}

function changeMinutes() {
    minutes++;
    if (minutes < 10) {
        minutesInHtml.innerText = `0${minutes}`;
    } else if (minutes > 60) {
        minutes = 0;
        changeHours();
    } else {
        minutesInHtml.innerText = `${minutes}`;
    }


}

function changeHours() {
    hours++;
    if (hours < 10) {
        hoursInHtml.innerText = `0${hours}`;
    } else if (hours > 60) {
        hours = 0;
    } else {
        hoursInHtml.innerText = `${hours}`;
    }


}


startButton.addEventListener('click', () => {

    switch (startButton.innerText) {
        case `Старт`:
            clearInterval(interval);
            interval = setInterval(startTimer, 10);
            startButton.innerText = `Пауза`;
            break;
        case `Пауза`:
            clearInterval(interval);
            startButton.innerText = `Продолжить`;
            break;
        case `Продолжить`:
            interval = setInterval(startTimer, 10);
            startButton.innerText = `Пауза`;
            break;
    }
    return;
})

circleButton.addEventListener('click', () => {
    finishCircle();
    return;
})

stopButton.addEventListener('click', () => {
    stopTimer();
    clearInterval(interval);
    startButton.innerText = `Старт`;
    return;
})

resetResults.addEventListener('click', () => {
    count = 0;
    results.innerText = ` `;
    return;
})