var mic;
var amp;
var soundFile;
var playing = false;
var smoothing = (0);
var threshold = 0.1;
var cutoff = 0;
var addThresh = 0.5;
var decayThresh = 0.90;
function preload() {
  soundFile = loadSound('Fireflies.mp3')
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  rectMode(CENTER)
  
  amp = new p5.Amplitude();
  amp.setInput(soundFile);

}


function draw(){
  background(0,20);
  fill(255, 255, 0)
  amp.smooth(smoothing);
  var level = amp.getLevel();

  console.log(level)
  var size = map(level, 0, 0.6,100, 450);
if (level > threshold + cutoff){
  var x = random(width);
  var y = random(height)
  ellipse(x,y,size,size)

  rect(x,y,size + 1,size + 1)
  cutoff = addThresh;
}
cutoff = cutoff * decayThresh;
var colorseed = map(level, 0,0.50,25,255)
fill(colorseed,0,0);
ellipse(width/2, height/2, size, size)
ellipse(width/3, height/3,size,size)
ellipse(width/4, height/4,size,size)
fill(0,255,0)
triangle(x,y,width/2,height/4,size,size)


}


function keyPressed(){
if (playing == true) {
  soundFile.pause();
  playing = false
} else {
  soundFile.play()
  playing = true
}

}
