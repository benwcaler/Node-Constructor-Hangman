var letter = require("./letter.js");

function Word(guessWord) {
  this.letters = [];
  this.lettersArr = function() {
    for (var i = 0; i < guessWord.length; i++) {
      var newLetter = new letter(guessWord[i]);
      this.letters.push(newLetter);
    }
  }
  // this.string = function() {
  //   adsf
  // }
}
var test = new Word("booger")
test.lettersArr()
for (var i=0;i<test.letters.length;i++) {
console.log(test.letters[i].char)
}