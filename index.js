var unirest = require("unirest");
var word = require("./word.js");
var title = require("./title.js");
var inquirer = require("inquirer");
var gameWord;
var player;
var score = 0;
var guessed = [];

function newWord() {
  unirest
    .get("https://wordsapiv1.p.mashape.com/words/?lettersMin=5&random=true")
    .header(
      "X-Mashape-Key",
      "sEoyKbmq31mshPFYo9JMXnrNzDBCp1AnQFrjsnf17maAdDoTwO"
    )
    .header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
    .end(function(result) {
      gameWord = new word(result.body.word);
      gameWord.lettersArr();
      gameWord.string();
      ask()
    });
}
function newGame() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter name - ",
        name: "name"
      }
    ])
    .then(function(response) {
      newWord();
    });
}
function ask() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter your guess-   ",
      name: "guess"
    }

    //word.letters[i].compare
  ]).then(function(response) {
    for (var i=0; i<gameWord.letters.length;i++) {
      gameWord.guess(response.guess);
    }
    gameWord.string()
    ask();
  });
}
newGame();