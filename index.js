var unirest = require("unirest");
var word = require("./word.js");
var title = require("./title.js");
var hang = require("./hang.js");
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
      hang.gallows();
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
      if (guessedLetters.includes(response.guess)) {
        console.log("You've already guessed that.");
        ask();
        return;
      } else {
        guessedLetters.push(response.guess);
      }
      gameWord.guess(response.guess);
      letterCheck(response.guess);
      switch (incorrect) {
        case 6:
          hang.gallows();
          break;
        case 5:
          hang.head();
          break;
        case 4:
          hang.body();
          break;
        case 3:
          hang.arm1();
          break;
        case 2:
          hang.arm2();
          break;
        case 1:
          hang.leg1();
          break;
      }
      console.log("\nDead letters:  " + guessedLetters.sort().join(" "));
      gameWord.string();
      solvedWord(response.guess);
      if (wordLetters.length > 0 && incorrect > 0) {
        ask();
      } else {
        console.log("You win!")
        gameOver();
      }
    });
}

function gameOver() {
  if (incorrect===0) {
    hang.leg2();
  }
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
  } else {
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
