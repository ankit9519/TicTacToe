    function resetGame() {
    activePlayerNumber = 0;
    gameRound = 1;
    gameOverElement.firstElementChild.innerHTML = '<span id="winner-name"> PLAYER NAME</span> You Won!';
    gameOverElement.style.display = 'none';
    for (let i=0;i<3;i++) {
        for (let j=0;j<3;j++) {
            gameData[i][j] = 0;
            console.log(gameFieldElements);
            gameFieldElements[i * 3 + j].textContent = ''; // Reset content
            gameFieldElements[i * 3 + j].classList.remove('disabled');
        }
    }
}

function startNewGame() {
    if(playersInfo[0].name === '' || playersInfo[1].name === '') {
        alert('Enter the names of both the Players to start the game!');
        return;
    }

    resetGame();    

    activePlayerNameElement.textContent = playersInfo[activePlayerNumber].name;
    startNewGameElement.style.display = 'block';
    console.log(playersInfo[0].name);
}

function switchPlayers() {
    if (activePlayerNumber === 0) {
        activePlayerNumber = 1;
    } else {
        activePlayerNumber = 0;
    }
    activePlayerNameElement.textContent = playersInfo[activePlayerNumber].name;
}

function selectGameField(event) {
    
    const selectedRow = event.target.dataset.row -1;
    const selectedColumn = event.target.dataset.col -1;
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please Select an empty field!');
        return;
    }

    event.target.textContent = playersInfo[activePlayerNumber].symbol;
    event.target.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayerNumber + 1;
    const winnerID = gameOverCheck();
    if (winnerID !== 0) {
        endGame(winnerID);
    }
    gameRound++;
    switchPlayers();
}

function gameOverCheck() {
    // Check rows for Equality
    for(let i=0; i<3; i++){
        if(
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }

    // Check columns for Equality
    for(let i=0; i<3; i++){
        if(
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }

    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2] 
    ) {
        return gameData[0][0];
    }

    if (
        gameData[0][2] > 0 &&
        gameData[0][2] === gameData[1][1] &&
        gameData[1][1] === gameData[2][0] 
    ) {
        return gameData[0][2];
    }

    if (gameRound === 9) {
        return -1
    }

    return 0;
    
}

function endGame(winnerID) {
    gameOverElement.style.display = 'block';
    if(winnerID > 0) {
        const winnerName = playersInfo[winnerID - 1].name;
        console.log(winnerName);
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
        gameOverElement.firstElementChild.textContent = 'It\'s a draw!';
    }
}