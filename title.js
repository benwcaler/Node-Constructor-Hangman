var fs = require("fs");

var menu = {
  header: function() {
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "==========================================================================");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||             ","|     |  ---   --     ---","                     -------","    ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||             ","|\\    | |   | |   \\  |","                       |       |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||","             | \\   | |   | |    | |          ","            ---","      |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||","             |  \\  | |   | |    | |          ","           |   |","     |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||","             |   \\ | |   | |    | |--        ","          \\ --- /","    |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||","             |    \\| |   | |    | |                ","     \\ | /  ","   |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||","             |     | |   | |   /  |                 ","     \\|/    ","  |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||","             |     |  ---   --     ---              ","      |      "," |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||","                                                    ","      |      "," |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||"," |    |  ---  |     |  ---   |    |  ---  |     |   ","      |      "," |","   ||")
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||"," |    | |   | |\\    | |   |  |\\  /| |   | |\\    |","         |   ","    |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||"," |    | |   | | \\   | |      | \\/ | |   | | \\   |","        /\\  ","     |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||"," |    | |   | |  \\  | |      |    | |   | |  \\  | ","      /  \\  ","    |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||"," |----| |---| |   \\ | |      |    | |---| |   \\ | ","     /    \\ ","    |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||"," |    | |   | |    \\| |  _   |    | |   | |    \\| ","    /      \\","    |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[31m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||"," |    | |   | |     | |   |  |    | |   | |     |   ","             "," |","   ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[37m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "||"," |    | |   | |     |  ---   |    | |   | |     |","   ______________|","   ||")
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "==========================================================================");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[0m\x1b[43m\x1b[34m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[0m\x1b[43m\x1b[34m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[0m\x1b[43m\x1b[34m%s\x1b[0m", "======","New Game - N","=========","Instructions - I","=========","High Scores - S","=======");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "==========================================================================");
  },
  instructions: function() {
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "==========================================================================");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||                                                                      ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||                            Instructions:                             ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||                                                                      ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||  1- Just like any other hangman you must guess a letter.             ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||  2- Each letter you guess correctly will award you 10 points.        ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||  3- Each letter you guess incorrectly will take away 5 points.       ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||  4- You are allowed 30 incorrectly guessed letters across all games. ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||  5- You may type 'hint' on any guess to be given a hint.             ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||  6- Each hint will cost you 5 points and one guess.                  ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||  7- The API gods have not provided a hint for every word.            ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||  8- If a hint is not provided, you will not be docked points/guesses.||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||                                                                      ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "==========================================================================");

  },
  highScore: function() {
    fs.readFile("./score.txt", "utf8", function (err, data) {
      if (err) throw err;
      console.log(data);
    })
  }
}

module.exports = menu;