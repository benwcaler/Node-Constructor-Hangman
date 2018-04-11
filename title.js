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
    console.log("\x1b[43m\x1b[34m%s\x1b[30m%s\x1b[34m%s\x1b[30m%s\x1b[34m%s\x1b[30m%s\x1b[34m%s\x1b[0m", "======","New Game - N","=========","Instructions - I","=========","High Scores - S","=======");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "==========================================================================");
  },
  instructions: function() {
    var selection = require("./index.js");
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
    selection();
  },
  highScore: function() {
    fs.readFile("./score.txt", "utf8", function (err, data) {
      var parsed = [];
      var arr = data.split("\n");
      if (err) throw err;
      for (var i=0;i<arr.length-1; i++) {
        parsed.push(JSON.parse(arr[i]));
      }
      var sorted = parsed.slice(0);
      sorted.sort(function(a,b) {
        return b.score - a.score;
      });
      menu.printScore(sorted);
    })
  },
  printScore: function(arr) {
    var selection = require("./index.js");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "==========================================================================");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||                                                                      ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||                               HIGH SCORES                            ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||                                                                      ||");
    if (arr.length <= 10){
    for (var i=0;i<arr.length;i++) {
      var place = i+1
      var s = "||                   " + place + "-  " + arr[i].name +"  ----------  " + arr[i].score;
      var l = "||                  " + place + "-  " + arr[i].name +"  ----------  " + arr[i].score;
      var nether = "";
      function spaces(x) {
        num = 72-x.length;
        for (var i = 0; i<num;i++) {
          nether = nether + " ";
        }
      }
      if (i<9){
        spaces(s)
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", s + nether + "||");
      } else{
        spaces(l)
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", l + nether + "||");
      }
    }
    } else {
    for (var i=0;i<10;i++) {
      var place = i+1
      var s = "||                   " + place + "-  " + arr[i].name +"  ----------  " + arr[i].score;
      var l = "||                  " + place + "-  " + arr[i].name +"  ----------  " + arr[i].score;

      if (i<9) {
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", s);
      } else {
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", l);
      }
    }
    }
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||                                                                      ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "||                                                                      ||");
    console.log("\x1b[43m\x1b[34m%s\x1b[0m", "==========================================================================");
    selection();
  },
}

module.exports = menu;