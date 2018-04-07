function Letter(char) {
  this.char = toUpperCase(char);
  this.guessed = false;
  this.toString = function() {
    if (this.guessed) {
      return char;
    } else {
      if (char === " ") {
        return " ";
      } else if (char === "-") {
        return "-"
      } else {
        return "_";
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
