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
  };
  
  determineWinner(player) {
    for (var i = 0; i < this.winCombos.length; i++) {
      if (player.choices.includes(this.winCombos[i])) {
        player.wins++
        this.gameOver = true
      } 
    } 
    return 
  };

  playGame(turn, player) {
    player.takeTurn(turn)
        checkBoardAvailability()
        this.determineWinner(player)
        this.isADraw(player)
        console.log('try again')
  };

  checkBoardAvailability() {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i] === 0) {
        this.board[i] = player.token
        }
        player.choices.push([i])
    }
  };

  resetGame() {
    this.player1.choices = [];
    this.player2.choices = [];
    this.player1.turn = null;
    this.player2.turn = null;
    this.gameOver = false;
    this.draw = false;
  };

  clearBoard() {
    
  };
 
  isADraw(player) {
    if (player.choices.length === 5) {
      this.draw = true
    }
  }
};
