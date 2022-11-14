class Game {
  constructor() {
    this.player1 = new Player(1,'🌯');
    this.player2 = new Player(2, '🌮');
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
  };
  
  determineWinner() {
    if (this.currentPlayer.choices < 3) {
      return
    } else {
      for (var i = 0; i < this.winCombos.length; i++) {
        if (this.currentPlayer.choices.includes(this.winCombos[i][0]) 
        && this.currentPlayer.choices.includes(this.winCombos[i][1]) 
        && this.currentPlayer.choices.includes(this.winCombos[i][2])) {
        this.currentPlayer.wins++
        this.currentPlayer.saveWinsToStorage()
        this.gameOver = true;
        }
      }
    }
  };

  playGame(choice) {
    this.determinePlayer()
    this.currentPlayer.takeTurn(choice)
    return this.checkBoardAvailability(choice)
  };

  checkBoardAvailability(choice) {
    if (this.board[choice] === 0) {
      this.board[choice] = this.currentPlayer.id
      this.currentPlayer.choices.push(choice)
      this.determineWinner()
      this.isADraw() 
      return true
      } else {
    }
  };

  resetGameData() {
    this.player1.choices = [];
    this.player2.choices = [];
    this.player1.choice = null;
    this.player2.choice = null;
    this.board = 
    [0, 0, 0, 
     0, 0, 0, 
     0, 0, 0 ];
    this.gameOver = false;
    this.draw = false;
    this.currentPlayer = null;
  };

  isADraw() {
    if (this.currentPlayer.choices.length === 5) {
      this.draw = true
    }
  };

clearWins() {
  this.player1.wins = 0;
  this.player2.wins = 0;
  }
};

