class Game {
  constructor() {
    this.player1 = new Player(1,'☀️');
    this.player2 = new Player(2, '🌧');
    this.winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6]];
    this.board = 
      [0, 0, 0, 
       0, 0, 0, 
       0, 0, 0 ]
    this.gameOver = false;
    this.draw = false;
    this.currentPlayer = null;
  };
  
  determinePlayer() {
    if (this.player1.choices.length === this.player2.choices.length) {
        this.currentPlayer = this.player1
    } else {
        this.currentPlayer = this.player2
    }
}
  
// determineWinner() {
//   var count = 0;
//     if (this.currentPlayer.choices.length < 3) {
//       return;
//   } else {
//       for (i = 0; i < this.winCombos.length; i++) {
//           for (i = 0; i < this.winCombos[i].length; i++) {
//               if (this.currentPlayer.choices.includes(this.winCombos[i][i])) {
//                   count++
//               } else {
//                   count = 0;
//               }
//           }
//       }
//       if (count === 3) {
//           this.currentPlayer.wins++
//           this.gameOver = true;
//           return;
//       } else {
//           return;
//       }
//   }
// }

  playGame(choice) {
    this.determinePlayer()
    console.log('hi')
    this.currentPlayer.takeTurn(choice)
    this.checkBoardAvailability(choice)
  };

  checkBoardAvailability(choice) {
    if (this.board[choice] === 0) {
      this.board[choice] = this.currentPlayer.id
      this.currentPlayer.choices.push(choice)
      // this.determineWinner()
      this.isADraw()
      console.log(this.gameOver)
    } else {
      console.log('Space not available, try again!')
    }
  };

  resetGame() {
    this.player1.choices = [];
    this.player2.choices = [];
    this.player1.choice = null;
    this.player2.choice = null;
    this.gameOver = false;
    this.draw = false;
  };

  isADraw(p) {
    if (this.currentPlayer.choices.length === 5) {
      this.draw = true
    }
  }
};

