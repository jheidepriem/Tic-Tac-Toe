var game = new Game();


var boxes = document.querySelectorAll('.box');
var player1Score = document.querySelector('.player1-score');
var player2Score = document.querySelector('.player2-score');
var clearGameButton = document.querySelector('.clear-game-button');
var gameBoard = document.querySelector('.game-board');
var gameHeader = document.querySelector('h1');

window.addEventListener('load', onPageLoad);
gameBoard.addEventListener('click', addPlayersToken);
clearGameButton.addEventListener('click', clearScores)


function onPageLoad() {
 displayLocalStorage()
};

function displayLocalStorage() {
  if (localStorage.length > 0) {
    game.player1.retrieveWinsFromStorage()
    game.player2.retrieveWinsFromStorage()
  }
  player1Score.innerText = `Wins: ${game.player1.wins}`;
  player2Score.innerText = `Wins: ${game.player2.wins}`;
};


function playRound(choice) {
 if (game.playGame(choice)) {
  updateWins() 
  }
};

function addPlayersToken(event) {
  var choice = Number(event.target.id)
  playRound(choice);
  if (game.currentPlayer.choices.includes(choice)) {
      boxes[choice].innerText = `${game.currentPlayer.token}`
  } 
};

function updateStartingPlayer() {
  var nextPlayer = game.currentPlayer.id === game.player1.id ? game.player2.id : game.player1.id
  gameHeader.innerText = `It's Player ${nextPlayer}'s Turn!`
};

function updateWins() {
  if (game.currentPlayer === game.player1 && game.gameOver === true) {
    gameHeader.innerText = ` ${game.player1.token} Wins!`
    gameBoard.classList.add('disabled')
    displayReset()
  } else if (game.currentPlayer === game.player2 && game.gameOver === true) {
    gameHeader.innerText = ` ${game.player2.token} Wins!`
    gameBoard.classList.add('disabled')
    displayReset()
  } else if (game.draw === true) {
    gameHeader.innerText = `It's a Draw!`
    displayReset()
  }
  player1Score.innerText = `Wins: ${game.player1.wins}`;
  player2Score.innerText = `Wins: ${game.player2.wins}`;
};

function displayReset() {
  if (game.gameOver = true) {
    setTimeout(function() {
    clearBoard()
    gameBoard.classList.remove('disabled')
    }, 1200)
  }
};
  
function clearBoard() {
  game.resetGameData() 
    for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerText = ``
    gameHeader.innerText = `It's Player ${game.player1.id}'s Turn!` 
  }
};

function clearScores() {
  clearBoard()
  game.clearWins()
  localStorage.clear()
  player1Score.innerText = `Wins: 0 `
  player2Score.innerText = `Wins: 0`
  gameBoard.classList.remove('disabled')
};

