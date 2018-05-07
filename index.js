
// Global Variables
var blueDiv = document.getElementById('blue_car');
var greenDiv = document.getElementById('green_car');
var posB;
var posG;
var blueImage = document.getElementById('blueImg');
var greenImage = document.getElementById('greenImg');

//To Reset Image Source
function setUp(){
  posB = 0;
  posG = 0;
  blueDiv.style.left = posB + 'px';
  greenDiv.style.left = posG + 'px';
  blueImage.src = "blue_car.png";
  greenImage.src = "green_car.png";
  blueImage.style.display = "block";
  greenImage.style.display = "block";
  document.getElementById('blueWinsImg').style.display = "none";
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
      posB > posG ? blueWins() : greenWins();
    } else {
      var randomB = Math.floor(Math.random() * 25);
      var randomG = Math.floor(Math.random() * 25);
      posB += randomB;
      posG += randomG;
      blueDiv.style.left = posB + 'px';
      greenDiv.style.left = posG + 'px';

    }
  }
}

// Winner Declared
function blueWins(){
  greenImage.style.display = "block";
  document.getElementById('blueWinsImg').style.display = "block";
    window.alert("Blue wins! Click on the flag to restart.");
}
function greenWins(){
  blueImage.style.display = "block";
  document.getElementById('greenWinsImg').style.display = "block";
    window.alert("Green wins! Click on the flag to restart.");
}
