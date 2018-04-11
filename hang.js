var hangingMan = {
  gallows: function (){
    console.log("\x1b[43m\x1b[35m%s\x1b[0m","===================================================================");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","       ------- ","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","      |       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","______________|","                        ||");
  },
  head: function (){
    console.log("\x1b[43m\x1b[35m%s\x1b[0m","===================================================================");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","        ------- ","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","       |       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","      --- ","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","     |   |","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","      --- ","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","               |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","               |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","               |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","               |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","               |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","               |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","               |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","               |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","               |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       ","               |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                       "," ______________|","                        ||");
  },
  body: function() {
    console.log("\x1b[43m\x1b[35m%s\x1b[0m","===================================================================");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              "," ------- ","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                           ","  --- ","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                           "," |   |","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                            "," --- ","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","______________|","                        ||");
  },
  arm1: function() {
    console.log("\x1b[43m\x1b[35m%s\x1b[0m","===================================================================");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              "," ------- ","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                            "," --- ","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                            ","|   |","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                           ","\\"," ---","      |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                           "," \\"," |","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                           ","  \\","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","______________|","                        ||");
  },
  arm2: function() {
    console.log("\x1b[43m\x1b[35m%s\x1b[0m","===================================================================");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              "," ------- ","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                            "," --- ","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                            ","|   |","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                           ","\\ ---"," /","    |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                           "," \\ |"," /","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                           ","  \\|","/","      |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","              |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","______________|","                        ||");
  },
  leg1: function() {
    console.log("\x1b[43m\x1b[35m%s\x1b[0m","===================================================================");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              "," ------- ","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                            "," --- ","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                            ","|   |","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[31m%s\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                           ","\\ ---"," /","    |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[31m%s\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                           "," \\ |"," /","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[31m%s\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                           ","  \\|","/","      |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                          ","   /","        |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                          ","  /","         |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                          "," /","          |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                          ","/","           |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","______________|","                        ||");
  },
  leg2: function() {
    console.log("\x1b[43m\x1b[35m%s\x1b[0m","===================================================================");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              "," ------- ","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                            "," --- ","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                            ","|   |","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[31m%s\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                           ","\\ ---"," /","    |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[31m%s\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                           "," \\ |"," /","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[31m%s\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                           ","  \\|","/","      |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                              ","|","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                          ","   /","\\","       |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                          ","  /","  \\","      |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                          "," /","    \\","     |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[31m%s\x1b[5m\x1b[31m%s\x1b[0m\x1b[43m\x1b[30m%s\x1b[35m%s\x1b[0m","||                          ","/","      \\","    |","                        ||");
    console.log("\x1b[43m\x1b[35m%s\x1b[30m%s\x1b[35m%s\x1b[0m","||                        ","______________|","                        ||");
  }
}

module.exports = hangingMan;