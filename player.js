class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.choices = [];
    this.turn = null;
  }

takeTurn(turn) {
  this.turn = turn
  }
};



