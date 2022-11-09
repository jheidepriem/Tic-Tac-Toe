class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.choice = null;
    this.choices = [];
  }

takeTurn(choice) {
  this.choice = choice
  }
};



