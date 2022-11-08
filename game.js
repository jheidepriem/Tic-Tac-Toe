class Game {
  constructor(player, ) {
    this.player1 = new Player (1, '☀️');
    this.player2 = new Player (2, '🌧');
    this.winCombos = [[box1, box4, box7],[box2, box5, box7],[box3, box6, box9],[box1, box2, box3],[box4, box5, box6], [box7, box8, box9], [box1, box5, box9], [box3, box5, box7]];
    this.board = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
    this.winner =  winner;
    this.draw = false;
  }
};

  wins() {
    if (this.board.includes(0) || this.board.includes(1) || this.board.includes(2) || 
      this.board.includes(3)|| this.board.includes(4) || this.board.includes(5) ||
      this.board.includes(6) || this.board.inludes(7)) {
      return this.winner  
     }
    }

   addToScores() {
    if (this.winner === this.player1) {
     this.player1.wins++;
   }
    if (this.winner === this.player2) {
      this.player2.wins++;
  }
};

  //playerChoice() {
// check for win
// check for draw
//
  //}

  //isADraw() {
  // if player1 board length === 5 or player2 board length === 5
  // this.draw = true
  //}

// resetBoard() {

//}

//clearBoard() {

//}

// When someone opens the game, the game header will says it's player1's turn
// The player will choose a space and their token will be placed in that box.
// after they choose a space, player2 will take a turn. their token will be played on the game box they choose.
//The turns will continue until someone either gets a winning combination or 
//someone goes 5 times and the "its a draw" message pops up at the top. The player who wins will have their score increment by one. 
//After a few seconds, the game board automatically resets and the message at the top of the page goes back to saying "it's player1's turn"
// If the users want to clear their scores, they can click a button at the bottom of the page, and it will reset the entire game. 





