class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.turn = ``
  }
}

takeTurn() {
  if (this.turn === player1) {
    this.turn = player2
  } else if (this.turn === player2) {
    this.turn = player1
  }
}
  
