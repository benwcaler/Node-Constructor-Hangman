function Letter(char) {
  this.char = char;
  this.guessed = false;
  this.toString = function() {
    if (this.guessed) {
      console.log(char);
    } else {
      console.log("_");
    }
  };
  this.compare = function(guess) {
    if (guess === this.char) {
      this.guessed = true;
    }
  };
}

module.exports = Letter