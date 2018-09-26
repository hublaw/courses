var p1Btn = document.querySelector("#p1btn");
var p1Display = document.getElementById("p1score");
var p1Score = 0;

var p2Btn = document.querySelector("#p2btn");
var p2Display = document.getElementById("p2score");
var p2Score = 0;

var resetBtn = document.getElementById("reset");
var numInput = document.getElementById("numInput");

var gameOver = false;
var winningScoreDisplay = document.getElementById("playTo");
var winningScore = Number(winningScoreDisplay.textContent);

p1Btn.addEventListener("click", function() {
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
})

p2Btn.addEventListener("click", function() {
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
})

function reset(){
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}
resetBtn.addEventListener("click", function() {
  winningScore = 5;
  numInput.value = null;
  winningScoreDisplay.textContent = 5;
  reset();
})

numInput.addEventListener("input", function() {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(winningScoreDisplay.textContent);
  reset();
})
