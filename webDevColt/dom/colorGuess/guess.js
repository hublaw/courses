var squares = document.getElementsByClassName("square");
var displaySelectedColor = document.querySelector("h1 span");
var newColorsBtn = document.getElementById("new");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var messageDisplay = document.getElementById("message");
var header = document.getElementsByTagName('h1')[0];
var isEasy = false;


var selectedColor;

//helper functions
function getRandomInt(int) {
  return Math.floor(Math.random() * int + 1);
}

function getRandomRGBColor(){
  return `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
}

function selectColor(num) {
  var colors = [];
  for(var i = 0; i < squares.length; i++) {
    colors.push(squares[i].style.backgroundColor)
  }
  return colors[getRandomInt(num - 1)];
}

function initialize(num) {
  for(var i = 0; i < num; i++) {
    // set colors
    squares[i].style.backgroundColor = getRandomRGBColor();
    squares[i].addEventListener("click", colorGuessHandler);
  }
  selectedColor = selectColor(num);
  displaySelectedColor.textContent = selectedColor;
  header.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";

}

function colorAllSquares(color) {
  for(let i = 0; i < squares.length; i++) {
    // remove timeout to make immediate change, not timed
    setTimeout(function() {
      squares[i].style.backgroundColor = color;
    }, 50*i);
  }
  header.style.backgroundColor = color;
}

function colorGuessHandler() {
  let thisColor = this.style.backgroundColor;
  if( thisColor !== selectedColor) {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try Again";
  } else {
    colorAllSquares(thisColor);
    messageDisplay.textContent = "Correct!";
    newColorsBtn.textContent = "play again?"
  }
}

// invoked code
initialize(6);

newColorsBtn.addEventListener("click", function() {
  var mode = isEasy ? 3 : 6;
  initialize(mode);
  newColorsBtn.textContent = "new colours"
});

easyBtn.addEventListener("click", function() {
  isEasy = true;
  initialize(3);
  for(var i = 5; i > 2; i--) {
    squares[i].classList.add("easy");
  }
  this.classList.add("active");
  hardBtn.classList.remove("active");
})

hardBtn.addEventListener("click", function() {
  isEasy = false;
  initialize(6);
  for(var i = 5; i > 2; i--) {
    squares[i].classList.remove("easy");
  }
  this.classList.add("active");
  easyBtn.classList.remove("active");
});
