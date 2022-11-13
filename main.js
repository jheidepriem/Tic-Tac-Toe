var game = new Game();

var boxes = document.querySelectorAll('.box');
var player1Score = document.querySelector('.player1-score');
var player2Score = document.querySelector('.player2-score');
var clearGameButton = document.querySelector('.clear-game-button');
var gameBoard = document.querySelector('.game-board');
var gameHeader = document.querySelector('h1');


gameBoard.addEventListener('click', addPlayersToken);
clearGameButton.addEventListener('click', clearScores)


function playRound(choice) {
  game.playGame(choice) 
  updateMessageAndWins()
};

function addPlayersToken(event) {
  var choice = Number(event.target.id)
  playRound(choice);
  if (game.currentPlayer.choices.includes(choice)) {
      boxes[choice].innerText = `${game.currentPlayer.token}`
  } 
};

function updateMessageAndWins() {
  var nextPlayer = game.currentPlayer.id === game.player1.id ? game.player2.id : game.player1.id
  gameHeader.innerText = `It's Player ${nextPlayer}'s Turn!`
  if (game.currentPlayer === game.player1 && game.gameOver === true) {
    gameHeader.innerText = `${game.player1.token} Wins!`
    displayReset()
  } else if (game.currentPlayer === game.player2 && game.gameOver === true) {
    gameHeader.innerText = ` ${game.player2.token} Wins!`
    displayReset()
  } else if (game.draw === true) {
    gameHeader.innerText = `It's a Draw!`
    displayReset()
  }
  player1Score.innerText = `Wins: ${game.player1.wins}`
  player2Score.innerText = `Wins: ${game.player2.wins}`
}

function displayReset() {
  if(game.gameOver = true) {
    setTimeout(function() {
      clearBoard()
    }, 2000)
   console.log(game.board)
  };
}
  
function clearBoard() {
  game.resetGameData() 
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerText = ``
    gameHeader.innerText = `It's ${game.player1.token}'s Turn!` 
    }
  }

function clearScores() {
  game.resetGameData()
  game.clearWins()
  player1Score.innerText = `Wins: 0 `
  player2Score.innerText = `Wins: 0`
};

//fix bug with reset and boxes being clicked
