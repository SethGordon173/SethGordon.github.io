
// Global Variables
var redDiv = document.getElementById('red_car');
var greenDiv = document.getElementById('green_car');
var posB;
var posG;
var redImage = document.getElementById('redImg');
var greenImage = document.getElementById('greenImg');

//To Reset Image Source
function setUp(){
  posB = 0;
  posG = 0;
  redDiv.style.left = posB + 'px';
  greenDiv.style.left = posG + 'px';
  redImage.src = "red_car.png";
  greenImage.src = "green_car.png";
  redImage.style.display = "block";
  greenImage.style.display = "block";
  document.getElementById('redWinsImg').style.display = "none";
  document.getElementById('greenWinsImg').style.display = "none";
  document.getElementById('startButton').style.display = "block";
  document.getElementById('startButtonTwo').style.display = "none";
}

//The Race
function race() {
    setUp();
  document.getElementById('startButton').style.display = "none";
  document.getElementById('startButtonTwo').style.display = "block";
  
  var timer = setInterval(frame, 100);
  
//Moving Images using Rng
  function frame() {
    if (posB > 500 || posG > 500 ){
      clearInterval(timer);
      posB > posG ? redWins() : greenWins();
    } else {
      var randomB = Math.floor(Math.random() * 25);
      var randomG = Math.floor(Math.random() * 25);
      posB += randomB;
      posG += randomG;
      redDiv.style.left = posB + 'px';
      greenDiv.style.left = posG + 'px';

    }
  }
}

// Winner Declared
function redWins(){
  greenImage.style.display = "block";
  document.getElementById('redWinsImg').style.display = "block";
    window.alert("Red wins! Click on the flag to restart.");
}
function greenWins(){
  redImage.style.display = "block";
  document.getElementById('greenWinsImg').style.display = "block";
    window.alert("Green wins! Click on the flag to restart.");
}
