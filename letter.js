var inquirer = require("inquirer");

function Letter(char, guess) {
  this.char = char;
  this.guessed = false;
  this.toString = function() {
    if (this.guessed) {
      console.log(char);
    } else {
      console.log("_");
    }
  };
  this.compare = function (guess) {
    if (guess === char) {
      this.guessed = true;
    }
  }
}
