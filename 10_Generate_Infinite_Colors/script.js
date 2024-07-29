const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor((Math.random() * 16))];
    }
    return color;
}


const startIntervalButton = document.getElementById("start");
const stopIntervalButton = document.getElementById("stop");


const changeBgColor = function () {
    let newColor = randomColor();
    document.querySelector('body').style.backgroundColor = `${newColor}`;
}

let interval

startIntervalButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(changeBgColor, 1000);
})

stopIntervalButton.addEventListener('click', () => {
    clearInterval(interval);
})