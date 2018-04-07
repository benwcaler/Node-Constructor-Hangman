var letter = require("./letter.js");

function Word(guessWord) {
  this.letters = [];
  this.lettersArr = function() {
    for (var i = 0; i < guessWord.length; i++) {
      var newLetter = new letter(guessWord[i]);
      this.letters.push(newLetter);
    }
  };
  this.string = function() {
    var blanks = [];

    for (var i = 0; i < this.letters.length; i++) {
      blanks.push(this.letters[i].toString());
    }
    console.log(blanks.join(" "));
  };
  this.guess = function(guess) {
    for (var i = 0; i < this.letters.length; i++) {
      this.letters[i].compare(guess);
      this.letters[i].toString()
    }
  };
}

module.exports = Word;