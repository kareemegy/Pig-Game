// var setup
var socres, roundsScore, activePlayer, gamePlaying;
init();
// Btn-Roll()
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //display the result
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";
    // update the round score if the rolled number was not 1
    if (dice !== 1) {
      //Add score
      roundsScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundsScore;
    } else {
      //Next player
      nextPlayer();
    }
  }
});
// btn-hold()
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add CURRENT score to global score
    socres[activePlayer] += roundsScore;
    //updata the UI
    document.querySelector("#score-" + activePlayer).textContent =
      socres[activePlayer];
    //Check if player won the game
    if (socres[activePlayer] >= 20) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});
//New Game
document.querySelector(".btn-new").addEventListener("click", init);
//init
function init() {
  socres = [0, 0];
  activePlayer = 0;
  roundsScore = 0;
  gamePlaying = true;
  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "player 1";
  document.getElementById("name-1").textContent = "player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
//Next player
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundsScore = 0;
  //updata the UI
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}
