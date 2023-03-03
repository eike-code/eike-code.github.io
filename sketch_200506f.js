// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/074-clock.html

// Code changed by me [and refactored ;-)]

// Colours of the Watch are taken from the colours of the Kenyan flag, black, red (190,58,52), green (0,154,68) to reference ENDA running gear.

// Stroke weight for seconds is 1, for minutes 2, for hours 4.

// Total diameter 8/9th width/height.
// Seconds arc at 7/9th width/height.
// Minute arc at 6/9th width/height.
// Hour arc at 5/9th width/height.

// Length of 
// Second hand: 1/4 width/height
// Minute hand: 1/5 width/height
// hour hand: 1/6 width/height

// Inset time and date 1/9th height above/below centre.

function setup() {
  createCanvas(360,360);
  angleMode(DEGREES);
  }

function draw() {
  const hw = 1;

//set dim (dimension) to smaller value of width or height in case that canvas is not square
  let dim = height;
  if (dim > width)
    {dim = width};
  
  background(255);
  translate(dim/2, dim/2);
  
  // draw outer circle
  strokeWeight(hw*4);
  noFill();
  stroke(0, 0, 0);
  ellipse(0, 0, dim*8/9, dim*8/9);

 
  let hr = hour();
  let mn = minute();
  let sc = second();
  let d = day();
  let m = month();
  let y = year();
  
// Write time, date as text
  strokeWeight(1);
  stroke(51);
  textAlign(CENTER);
  text(nf(hr, 2) + ":" + nf(mn, 2) + ":" + nf(sc, 2) + " Uhr", 0, -dim*1/9);
  text(nf(d, 2) + "." + nf(m, 2) + "." + "\n" + y, 0, dim*1/9);
  
  rotate(-90);

// draw Seconds arc
  strokeWeight(hw);
  stroke(190,58,52);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, dim*7/9, dim*7/9, 0, secondAngle);
  
// draw Minutes arc
  strokeWeight(hw*2)
  stroke(0,154,68);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, dim*6/9, dim*6/9, 0, minuteAngle);
  
// draw Hours arc  
  strokeWeight(hw*4)
  stroke(0, 0, 0);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, dim*5/9, dim*5/9, 0, hourAngle);

// draw Hour hand  
  push();
  rotate(hourAngle);
  strokeWeight(hw*4)
  stroke(0, 0, 0);
  line(0, 0, dim/6, 0);
  pop();

// draw Minute hand
  push();
  rotate(minuteAngle);
  strokeWeight(hw*2)
  stroke(0,154,68);
  line(0, 0, dim/5, 0);
  pop();
  
// draw Second hand
  push();
  rotate(secondAngle);
  strokeWeight(hw);
  stroke(190,58,52);
  line(0, 0, dim/4, 0);
  pop();
  
  stroke(255);
  point(0, 0);
  strokeWeight(hw);
  stroke(0, 0, 0);
}
