


var player1Score = document.querySelector('.player1-score');
var player2Score = document.querySelector('.player2-score');
var clearGameButton = document.querySelector('.clear-game-button');
var gameBoard = document.querySelector('.game-board');
var gameHeader = document.querySelector('h1');


var game;
var currentPlayer;

var game = new Game()
console.log(game)

function determineTurn() {
  if (game.player1.choices.length <= game.player2.choices.length) {
    currentPlayer = game.player1
  } else {
    currentPlayer = game.player2
  }
}

function playRound(choice) {
  determineTurn()
  game.playGame(choice, currentPlayer)
    if (!game.gameOver && !game.draw) {
      determineTurn()
    } if (game.gameOver) {
      console.log(`Player ${currentPlayer.id} wins!`)
      game.resetGame()
    } if (game.draw) {
      console.log(`It's a draw!`)
      game.resetGame()
    }
} 


