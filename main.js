var game = new Game()

var box1 = document.querySelector('#box-1');
var box2 = document.querySelector('#box-2');
var box3 = document.querySelector('#box-3');
var box4 = document.querySelector('#box-4');
var box5 = document.querySelector('#box-5');
var box6 = document.querySelector('#box-6');
var box7 = document.querySelector('#box-7');
var box8 = document.querySelector('#box-8');
var box9 = document.querySelector('#box-9');
var player1Score = document.querySelector('.player1-score');
var player2Score = document.querySelector('.player2-score');
var clearGameButton = document.querySelector('.clear-game-button');
var gameBoard = document.querySelector('.game-board');
var gameHeader = document.querySelector('h1');

var game;
var currentPlayer;

function determineTurn() {
  if (game.player1.choices.length <= game.player2.choices.length) {
    currentPlayer = game.player1
  } else {
    currentPlayer = game.player2
  }
};

function playRound(turn) {
  determineTurn()
  game.playGame(turn, currentPlayer)
    if (!game.gameOver && !game.draw) {
      determineTurn()
    } if (game.gameOver) {
      console.log(`Player ${currentPlayer.id} wins!`)
      game.resetGame()
    } if (game.draw) {
      console.log(`It's a draw!`)
      game.resetGame()
    }
};

