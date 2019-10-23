$(document).ready(function() {

      var win = 0;
      $("#wScore").text("Wins: " + win);
      var loss = 0;
      $("#lScore").text("Losses: " + loss);
      var Score = 0;
      var gameScore = Math.floor(Math.random() * 102) + 19;
      var one = Math.floor(Math.random() * 12) + 1;
      var two = Math.floor(Math.random() * 12) + 1;
      var three = Math.floor(Math.random() * 12) + 1;
      var four = Math.floor(Math.random() * 12) + 1;
      $("#gScore").text("Game Score: " + gameScore);
      $("#uScore").text("User Score: " + Score);
      console.log(gameScore);
      console.log(one);
      console.log(two);
      console.log(three);
      console.log(four);
  
    // resets the values of the game
    function reset() {
      Score = 0;
      gameScore = Math.floor(Math.random() * 102) + 19;
      one = Math.floor(Math.random() * 12) + 1;
      two = Math.floor(Math.random() * 12) + 1;
      three = Math.floor(Math.random() * 12) + 1;
      four = Math.floor(Math.random() * 12) + 1;
      $("#gScore").text("Game Score: " + gameScore);
      $("#uScore").text("User Score: " + Score);
      console.log(gameScore);
      console.log(one);
      console.log(two);
      console.log(three);
      console.log(four);
    }
  
    function winGame() {
      alert("You win! Play again!");
      win = win + 1;
      $("#wScore").text("Wins: " + win);
      reset();
    }
  
    function loseGame() {
      alert("You lose! Try again!");
      loss = loss + 1;
      $("#lScore").text("Losses: " + loss);
      reset();
    }

    $("#pokemon1").click(function() {
      Score = Score + one;
      console.log("User Score: " + Score);
      $("#uScore").text("User Score: " + Score);
        if (Score === gameScore) {
          winGame();
        } else if (Score > gameScore) {
          loseGame();
        }
    });
  
    $("#pokemon2").click(function() {
      Score = Score + two;
      console.log("User Score: " + Score);
        $("#uScore").text("User Score: " + Score);
        if (Score === gameScore) {
          winGame();
        } else if (Score > gameScore) {
          loseGame();
        }
    });
  
    $("#pokemon3").click(function() {
      Score = Score + three;
      console.log("User Score: " + Score);
        $("#uScore").text("User Score: " + Score);
        if (Score === gameScore) {
          winGame();
        } else if (Score > gameScore) {
          loseGame();
        }
    });
  
    $("#pokemon4").click(function() {
      Score = Score + four;
      console.log("User Score: " + Score);
      $("#uScore").text("User Score: " + Score);
        if (Score === gameScore) {
          winGame();
        } else if (Score > gameScore) {
          loseGame();
        }
    });
  
  });