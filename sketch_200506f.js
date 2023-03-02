// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/074-clock.html

function setup() {
  createCanvas(384, 384);
  angleMode(DEGREES);
}

function draw() {
  const hw = 1;
  background(255);
  translate(height/2, width/2);
  strokeWeight(hw*4);
  noFill();
  stroke(0, 0, 0);
//  ellipse(0, 0, height*0.75, width*0.75);
  ellipse(0, 0, height, width);
  stroke(0, 0, 255);
 
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  let d = day();
  let m = month();
  let y = year();

  strokeWeight(hw);
  stroke(190,58,52);
  //noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
//  arc(0, 0, height*0.7, height*0.7, 0, secondAngle);
  arc(0, 0, height*8/9, height*8/9, 0, secondAngle);
  
  strokeWeight(hw*2)
  stroke(0,154,68);
  let minuteAngle = map(mn, 0, 60, 0, 360);
//  arc(0, 0, height*0.65, height*0.65, 0, minuteAngle);
  arc(0, 0, height*7/9, height*7/9, 0, minuteAngle);
  
  strokeWeight(hw*4)
  stroke(0, 0, 0);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, height*6/9, height*6/9, 0, hourAngle);

  push();
  rotate(hourAngle);
  strokeWeight(hw*4)
  stroke(0, 0, 0);
  line(0, 0, height/6, 0);
  pop();

  push();
  rotate(minuteAngle);
  strokeWeight(hw*2)
  stroke(0,154,68);
  line(0, 0, height/5, 0);
  pop();
  
  push();
  rotate(secondAngle);
  strokeWeight(hw);
  stroke(190,58,52);
  line(0, 0, height/4, 0);
  pop();
  
  stroke(255);
  point(0, 0);
  
  rotate(90)
  strokeWeight(hw);
  stroke(0, 0, 0);
  textAlign(CENTER);
  text(nf(hr, 2) + ":" + nf(mn, 2) + ":" + nf(sc, 2) + " Uhr", 0, height*0.1);
  text(nf(d, 2) + "." + nf(m, 2) + "." + "\n" + y, 0, height*0.45);
}
