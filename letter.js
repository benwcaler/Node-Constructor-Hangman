function Letter(char) {
  this.char = char;
  this.guessed = false;
  this.toString = function() {
    if (this.guessed) {
      return char;
    } else {
      if (char === " ") {
        return " ";
        this.guessed = true;
      } else if (char === "-") {
        return "-"
        this.guessed = true;
      } else {
        return "*";
      }
    }
  };
  this.compare = function(guess) {
    if (guess === this.char) {
      this.guessed = true;
    }
  };
}

module.exports = Letter;
