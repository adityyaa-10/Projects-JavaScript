const clock = document.getElementById("clock")

setInterval(() => {
    let date = new Date();
    date = date.toLocaleTimeString();
    // date = date.toLocaleString();
    // date = date.toDateString();
    clock.innerHTML = date;
}, 1000)