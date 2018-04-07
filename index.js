var unirest = require("unirest");
var word = require("./word.js");
var title = require("./title.js");
var gameWord = "";

function newWord() {
  unirest
    .get("https://wordsapiv1.p.mashape.com/words/?lettersMin=5&random=true")
    .header(
      "X-Mashape-Key",
      "sEoyKbmq31mshPFYo9JMXnrNzDBCp1AnQFrjsnf17maAdDoTwO"
    )
    .header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
    .end(function(result) {
      var getWord = new word(result.body.word);
      getWord.lettersArr();
      getWord.string();
    });
}

newWord();
