class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.choice = null;
    this.choices = [];
  }

  takeTurn(choice) {
    this.choice = choice;
  }

  saveWinsToStorage() {
    if (this.id === 1) {
      localStorage.setItem("p1SavedWins", this.wins);
    } else if (this.id === 2) {
      localStorage.setItem("p2SavedWins", this.wins);
    }
  }

  retrieveWinsFromStorage() {
    if (this.id === 1) {
      this.wins = localStorage.getItem("p1SavedWins");
    } else {
      this.wins = localStorage.getItem("p2SavedWins");
    }
  }
}
