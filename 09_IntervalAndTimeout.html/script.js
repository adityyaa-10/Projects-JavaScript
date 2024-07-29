// setTimeout
// calls the function after specified time, only once;

const sayHello = function (personName) {
    console.log(`Hello ${personName}`);
}

// This will call the function after 2.5 seconds;

const timeout = setTimeout(sayHello, 2500, "Adi");

// We want to stop the timeout function by clicking stop timeout button

const stopTimeoutButton = document.getElementById('stopTimeout');

// pass the reference of timeout, not the function
stopTimeoutButton.addEventListener('click', () => {
    clearTimeout(timeout);
})

// setInterval
// keeps calling the function after every interval of time
// we want to start the interval by clicing the startInterval button and stop the interval by clicking the stopInterval button;



const sayDate = function () {
    let date = new Date();
    console.log(`time is ${date.toLocaleTimeString()}`)
}


const startIntervalButton = document.getElementById('startInterval');

let interval;
startIntervalButton.addEventListener('click', () => {
    interval = setInterval(sayDate, 1000)
})

const stopIntervalButton = document.getElementById("stopInterval");

stopIntervalButton.addEventListener('click', () => {
    clearInterval(interval);
})

