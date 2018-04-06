var letter = require("./letter.js");
var blanks = [];

function Word(guessWord) {
  this.letters = [];
  this.lettersArr = function() {
    for (var i = 0; i < guessWord.length; i++) {
      var newLetter = new letter(guessWord[i]);
      this.letters.push(newLetter);
    }
  }
  this.string = function() {
    for (var i=0;i<this.letters.length;i++){
      this.letters[i].compare();
      blanks.push(this.letters[i].toString());
    }
  }
}

module.exports = Word;
// var test = new Word("sandwich")
// test.lettersArr()
// // for (var i=0;i<test.letters.length;i++) {
// // console.log(test.letters[i].char)
// // }
// test.string()

// console.log(blanks)