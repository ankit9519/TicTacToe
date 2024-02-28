function assignName(event) {

    editedPlayer = +event.target.dataset.playerid;
    console.log(editedPlayer);
    overlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
    
}

function closeUserOverlay() {

    overlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputelement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';

}

function savePlayerConfig(event) {

    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredName = formData.get('playername').trim();

    if(!enteredName) {
        event.target.firstElementChild.classList.add('error');
        errorOutputelement.textContent = "Please Enter a valid name!";
        return;
    }

    const updatedPlayerData = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerData.children[1].textContent = enteredName;
    playersInfo[editedPlayer - 1].name = enteredName;
    console.log(playersInfo);
    closeUserOverlay();

}