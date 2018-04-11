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
    var nether = "";
    for (var i = 0; i < this.letters.length; i++) {
      blanks.push(this.letters[i].toString());
    }
    var wrd = blanks.join(" ")
    function spaces() {
      var num = 59-wrd.length;
      for (var i = 0; i<num;i++) {
        nether = nether + " ";
      }
    }
    spaces()
    console.log("\n===================================================================");
    console.log("||                                                               ||");
    console.log("||    " + wrd + nether + "||");
    console.log("||                                                               ||")
    console.log("===================================================================\n");
  };
  this.guess = function(guess) {
    for (var i = 0; i < this.letters.length; i++) {
      this.letters[i].compare(guess);
      this.letters[i].toString()
      
    }
  };
}

module.exports = Word;