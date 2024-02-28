const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let editedPlayer = 0;
let activePlayerNumber = 0;
let gameRound = 1;

const playersInfo = [
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    }
];


const overlayElement = document.getElementById('overlay-config');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputelement = document.getElementById('entry-error');
const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');
const cancelOverlay = document.getElementById('cancel-config');
const name = document.getElementById('playername').value;

// Game Configuration
const startNewGameElement = document.getElementById('active-game');
const startNewGameBtn = document.getElementById('start-new-game');
const gameFieldElements = document.querySelectorAll('#game-board li');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');



// Event Listeners
player1Name.addEventListener('click',assignName);
player2Name.addEventListener('click',assignName);
cancelOverlay.addEventListener('click',closeUserOverlay);
backdropElement.addEventListener('click',closeUserOverlay);
formElement.addEventListener('submit',savePlayerConfig);
startNewGameBtn.addEventListener('click',startNewGame);
for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}
