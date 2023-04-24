// Getting all Elements from the DOM 
const computerChoice = document.querySelector('#computer-choice');
const playerChoice = document.querySelector('#player-choice');
const result = document.querySelector('#result');
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const startBtn = document.querySelector('#start-btn');
const playAgainBtn = document.querySelector('#play-again');
const gameBtnDiv = document.querySelector('#game-btns');
const choices = ['🪨', '🧻', '✂️']


// Function to get a randomIndex to use on the choices Array
function getRandomIndex() {
    let Index = Math.floor(Math.random() * choices.length);
    return Index;
}

// Function to render Computer Choices and Results
function game() {
    computerChoice.innerHTML = choices[getRandomIndex()];
    if (playerChoice.innerHTML === "🪨" && computerChoice.innerHTML === "🪨") {
        result.innerHTML = "🫶";
    } else if (playerChoice.innerHTML === "🪨" && computerChoice.innerHTML === "🧻") {
        result.innerHTML = "💔";
    } else if (playerChoice.innerHTML === "🪨" && computerChoice.innerHTML === "✂️") {
        result.innerHTML = "❤️";
    } else if (playerChoice.innerHTML === "🧻" && computerChoice.innerHTML === "🪨") {
        result.innerHTML = "❤️";
    } else if (playerChoice.innerHTML === "🧻" && computerChoice.innerHTML === "🧻") {
        result.innerHTML = "🫶";
    } else if (playerChoice.innerHTML === "🧻" && computerChoice.innerHTML === "✂️") {
        result.innerHTML = "💔";
    } else if (playerChoice.innerHTML === "✂️" && computerChoice.innerHTML === "🪨") {
        result.innerHTML = "💔";
    } else if (playerChoice.innerHTML === "✂️" && computerChoice.innerHTML === "🧻") {
        result.innerHTML = "❤️";
    } else if (playerChoice.innerHTML === "✂️" && computerChoice.innerHTML === "✂️") {
        result.innerHTML = "🫶";
    }
}

// Hides all 3 game buttons
function hideGameBtns() {
    gameBtnDiv.classList.remove('show');
    gameBtnDiv.classList.add('hide');
    playAgainBtn.classList.remove('hide');
    playAgainBtn.classList.add('show');
}

// resets the game and shows the 3 game buttons 
function playAgain() {
    computerChoice.innerHTML = '';
    playerChoice.innerHTML = '';
    result.innerHTML = '';
    playAgainBtn.classList.remove('show');
    playAgainBtn.classList.add('hide');
    gameBtnDiv.classList.remove('hide');
    gameBtnDiv.classList.add('show');
}

// Rockbtn Event added
rockBtn.addEventListener('click', function() {
    playerChoice.innerHTML = "🪨";
    game();
    hideGameBtns();
})

// Paperbtn Event added
paperBtn.addEventListener('click', function() {
    playerChoice.innerHTML = '🧻';
    game();
    hideGameBtns();
})

// Scissorsbtn Event added
scissorsBtn.addEventListener('click', function() {
    playerChoice.innerHTML = "✂️";
    game();
    hideGameBtns();
})

// Playagain btn event added
playAgainBtn.addEventListener('click', playAgain)

// Starts the game and renders the right buttons
startBtn.addEventListener('click', function() {
    startBtn.classList.remove('show');
    startBtn.classList.add('hide');
    gameBtnDiv.classList.remove('hide');
    gameBtnDiv.classList.add('show');
})




