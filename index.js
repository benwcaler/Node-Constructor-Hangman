var unirest = require("unirest");
var word = require("./word.js");
var title = require("./title.js");
var inquirer = require("inquirer");
var gameWord;
var player;
var score = 0;
var guessedLetters = [];
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
      wordLetters = [];
      deadLetters = [];
      gameWord = new word(result.body.word);
      gameWord.lettersArr();
      gameWord.string();
      for (var i = 0; i < gameWord.letters.length; i++) {
        if (
          gameWord.letters[i].char !== " " &&
          gameWord.letters[i].char !== "-"
        ) {
          wordLetters.push(gameWord.letters[i].char);
        }
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
      rmv.push(i);
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
      if (guessedLetters.includes(response.guess)){
        console.log("You've already guessed that.");
        ask();
      } else {
        guessedLetters.push(response.guess);
      }
      gameWord.guess(response.guess);
      console.log("     " + guessedLetters.sort().join(" "));
      gameWord.string();
      letterCheck(response.guess);
      solvedWord(response.guess);
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
    }
  }
  if (!contained) {
    deadLetters.push(ltr);
    incorrect--;
    if (score > 5) {
      score -= 5;
    }
    console.log("\x1b[32m%s\x1b[0m", "    Incorrect!");
  } else {
    console.log("\x1b[32m%s\x1b[0m", "    Correct!");
    score += 10;
  }
}

newGame();

//TODO format output
//TODO add letter graveyard display
//TODO add scoring function
//TODO add graphical hangman
//TODO add title page with selections for instructions, high scores, new game
//TODO add hint option
