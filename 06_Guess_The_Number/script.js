let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid Number")
    } else if (guess < 1) {
        alert("Please enter a valid Number")
    } else if (guess > 100) {
        alert("Please enter a valid Number")
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it right");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Number is too low");
    } else if (guess > randomNumber) {
        displayMessage("Number is too high")
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start a new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.getElementById('newGame');
    newGameButton.style.cursor = "pointer"
    newGameButton.addEventListener('click', () => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;

    })
}



