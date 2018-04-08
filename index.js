var unirest = require("unirest");
var word = require("./word.js");
var title = require("./title.js");
var inquirer = require("inquirer");
var gameWord;
var player;
var score = 0;
var guesseded = [];
var incorrect = 6;
var wordLetters = [];
var deadLetters = [];

function newWord() {
  unirest
    .get("https://wordsapiv1.p.mashape.com/words/?lettersMin=6&random=true")
    .header(
      "X-Mashape-Key",
      "sEoyKbmq31mshPFYo9JMXnrNzDBCp1AnQFrjsnf17maAdDoTwO"
    )
    .header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
    .end(function(result) {
      incorrect = 6;
      gameWord = new word(result.body.word);
      gameWord.lettersArr();
      gameWord.string();
      for (var i = 0; i < gameWord.letters.length; i++) {
        wordLetters.push(gameWord.letters[i].char);
      }
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

function solvedWord(ltr) {
  var rmv = [];
  for (var i = 0; i < wordLetters.length; i++) {
    if (ltr === wordLetters[i]) {
      rmv.push[i];
    }
  }
  for (var i = rmv.length - 1; i > -1; i--) wordLetters.splice(rmv[i], 1);
}

function ask() {
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
      solvedWord(response.guess);
      letterCheck(response.guess);
      if (wordLetters.length > 0 && incorrect > 0) {
        ask();
      } else {
        gameOver();
      }
    });
}

function gameOver() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to play again?",
        choices: ["Yes", "No"],
        name: "again"
      }
    ])
    .then(function(response) {
      if (response.again === "Yes") {
        newWord();
      } else {
        console.log("Good bye.");
        return;
      }
    });
}

function letterCheck(ltr) {
  var contained = false;
  for (var i = 0; i < wordLetters.length; i++) {
    if (ltr === wordLetters[i]) {
      contained = true;
      return;
    }
  }
  if (!contained) {
    deadLetters.push(ltr);
    incorrect--;
  }
}

newGame();
//TODO determine if the guess was good or not.
//TODO determine if the word is complete
//TODO move ask() call to if statement based on above.
