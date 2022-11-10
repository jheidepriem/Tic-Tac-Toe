var game = new Game()

var boxes = document.querySelectorAll('.box');
var player1Score = document.querySelector('.player1-score');
var player2Score = document.querySelector('.player2-score');
var clearGameButton = document.querySelector('.clear-game-button');
var gameBoard = document.querySelector('.game-board');
var gameHeader = document.querySelector('h1');

gameBoard.addEventListener('click', addPlayersToken)
gameHeader.innerText = `It's Player 1's Turn!`

function playRound(choice) {
  game.playGame(choice) 
  updateMessageAndWins()
  showButton() 
}

function addPlayersToken(event) {
  var choice = Number(event.target.id)
  playRound(choice);
  if (game.currentPlayer.choices.includes(choice)) {
      boxes[choice].innerText = `${game.currentPlayer.token}`;
      boxes[choice].classList.add('disabled')
  }

};

function updateMessageAndWins() {
  var nextPlayer = game.currentPlayer.id === game.player1.id ? game.player2.id : game.player1.id
  gameHeader.innerText = `It's Player ${nextPlayer}'s Turn!`
  if (game.player1.wins) {
   gameHeader.innerText = `Player ${game.player1.id} Wins!`
  } else if (game.player2.wins) {
    gameHeader.innerText = `Player ${game.player2.id} Wins!`
  }
  player1Score.innerText = `Wins: ${game.player1.wins}`
  player2Score.innerText = `Wins: ${game.player2.wins}`
};  

function displayReset() {
  if(game.gameOver = true) {
    setTimeout(clearBoard, 1500);
  }
}
 
function showButton() {
  clearGameButton.classList.remove('hidden')
};

function clearBoard() {
  game.resetGameData() 
  boxes.innerHTML = ``
};

// function clearScores() {
//   game.resetGameData()
//   player1Score.innerText = `Wins: `
//   player2Score.innerText = `Wins: `
//   clearGameButton.classList.add('hidden')
// };