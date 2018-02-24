//INITIALIZE VARIABLES HERE
var x = 1;
var y = 1;
var d = 500;
var c = 1;
var diameter = 50;
var speed = 11;
var yspeed = 10;
var dspeed = 12;
var cspeed = 13;
var diameter = 50;
function setup(){
//THIS HAPPENS ONCE
createCanvas(windowWidth,windowHeight);
background(25,25,25);
stroke(0);

}


function draw(){
//AFTER SETUP, THIS HAPPENS OVER AND OVER AGAIN 

if(x > width || x < 0){
speed = speed * -1;
}


if(y > height || y < 0){
yspeed = yspeed * -1;
}
fill(255,0,0)

ellipse(x,y,diameter + 1,diameter + 1);
line(x,y,diameter + 1,diameter + 1)
rect(x,y,diameter + 1,diameter + 1)






if(d > width || d < 0){
dspeed = dspeed * -1

}
if(c > height || c < 0){
cspeed = cspeed * -1
}
fill(50,50,50)
ellipse(d,c,diameter + 1, diameter + 1)
line(d,c,diameter + 1,diameter + 1)
rect(d,c,diameter + 1,diameter + 1)


x = x + speed;
y = y + yspeed;
d = d + dspeed;
c = c + cspeed;
fill(0,255,0)

ellipse(x,c,diameter + 1, diameter + 1)
line(x,c,diameter + 1,diameter + 1)
rect(x,c,diameter + 1,diameter + 1)
fill(255,0,255)
ellipse(d,y,diameter + 1,diameter + 1)
line(d,y,diameter + 1,diameter + 1)
rect(d,y,diameter +1,diameter + 1)
fill(255,255,200)
triangle(x,y,d,c,diameter + 1,diameter + 1)


}

