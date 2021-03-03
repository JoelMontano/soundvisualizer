let mySound;
let amplitude;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/THROATBABY');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log("setup")
  amplitude = new p5.Amplitude();
}

function draw() {
  background(255,105,180);

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 10, 400);
  fill('#EC8FD0');
  ellipse(displayWidth/2,displayHeight/2,size,size);

}

function mousePressed() {
  if (mySound.isPlaying()){
    mySound.pause();
  }
  else{
    mySound.play();
  }
}