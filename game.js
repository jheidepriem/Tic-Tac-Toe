class Game {
  constructor() {
    this.player1 = new Player(1,'☀️');
    this.player2 = new Player(2, '🌧');
    this.winCombos = [
      [1, 4, 7],
      [2, 5, 7],
      [3, 6, 9],
      [1, 2, 3],
      [4, 5, 6], 
      [7, 8, 9], 
      [1, 5, 9], 
      [3, 5, 7]];
    this.board = 
      [1, 2, 3, 
       4, 5, 6, 
       7, 8, 9 ]
    this.gameOver = false;
    this.draw = false;
  }
  
  determineWinner(player) {
    for (var i = 0; i < this.winCombos.length; i++) {
      if (player.choices.includes(this.winCombos[i])) {
        player.wins++
        this.gameOver = true
      } 
    } 
    return 
  }

  playGame(choice, player) {
    player.takeTurn(choice)
      if (!this.player1.choices.includes(choice) || !this.player2.choices.includes(choice)) {
        player.choices.push(choice)
        console.log('hello')
        this.determineWinner(player)
        this.isADraw(player)
      }
      console.log("space is already chosen, please choose another")
      return
    } 

  resetGame() {
    this.player1.choices = [];
    this.player2.choices = [];
    this.player1.choice = null;
    this.player2.choice = null;
    this.gameOver = false;
    this.draw = false;
  }

 
  isADraw(player) {
    if (player.choices.length === 5) {
      this.draw = true
    }
  }
}







