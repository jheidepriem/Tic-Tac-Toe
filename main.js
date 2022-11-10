var game = new Game()

var box = document.getElementById('#box')
var player1Score = document.querySelector('.player1-score');
var player2Score = document.querySelector('.player2-score');
var clearGameButton = document.querySelector('.clear-game-button');
var gameBoard = document.querySelector('.game-board');
var gameHeader = document.querySelector('h1');

window.addEventListener('load', loadGame)

function loadGame() {

}

function playRound(choice) {
  game.playGame(choice) 
  console.log(game.player1.choices)
  console.log(game.player2.choices)
}

function pickGamePiece(event) {
  game.currentPlayer.choice = event.target.id;
  box.innerText = `game.currentPlayer.token`  
}

function updateMessageAndWins() {
  if (game.player1.wins) {
   gameHeader.innerText = `Player ${game.player1.id} Wins!`
  } else if (game.player2.wins) {
    gameHeader.innerText = `Player ${game.player2.id} Wins!`
  } else {
    gameHeader.innerText = `It's a Draw!`
  }
  player1Score.innerText = `Wins: ${game.player1.wins}`
  player2Score.innerText = `Wins: ${game.player2.wins}`
}

function displayPlayersTurn() {
  gameHeader.innerText = `Player ${game.currentPlayer.id}'s Turn!`
}

function displayReset() {
  game.resetGame()
  setTimeout(game.resetGame, 1800);
  player1Score.innerText = ''
  player2Score.innerText = ''
}

