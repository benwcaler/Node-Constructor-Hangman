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
    .get("https://wordsapiv1.p.mashape.com/words/?lettersMin=6&random=true")
    .header(
      "X-Mashape-Key",
      "sEoyKbmq31mshPFYo9JMXnrNzDBCp1AnQFrjsnf17maAdDoTwO"
    )
    .header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
    .end(function(result) {
      gameWord = new word(result.body.word);
      gameWord.lettersArr();
      gameWord.string();
      ask();
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
      player = response.name;
      newWord();
    });
}

function ask() {
  var incorrect = 6;
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter your guess-   ",
        name: "guess"
      }
    ])
    .then(function(response) {
      gameWord.guess(response.guess);
      gameWord.string();
      ask();
    });
}
newGame();
//TODO determine if the guess was good or not. 
//TODO determine if the word is complete
//TODO move ask() call to if statement based on above.