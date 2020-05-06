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
  ellipse(0, 0, height*0.75, width*0.75);
  stroke(0, 0, 255);
  ////12
  //line(0, -height*0.375, 0, -height*0.4125);
  ////3
  //line(height*0.375, 0, height*0.4125, 0);
  ////6
  //line(0, height*0.375, 0, height*0.4215)
  ////9
  //line(-height*0.375, 0, -height*0.4125, 0)
  rotate(-90);
  
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  let d = day();
  let m = month();
  let y = year();

  strokeWeight(hw);
  stroke(255, 0, 0);
  //noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, height*0.7, height*0.7, 0, secondAngle);

  strokeWeight(hw*2)
  stroke(0, 255, 0);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, height*0.65, height*0.65, 0, minuteAngle);

  strokeWeight(hw*4)
  stroke(0, 0, 0);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, height*0.6, height*0.6, 0, hourAngle);

  push();
  rotate(secondAngle);
  strokeWeight(hw);
  stroke(255, 0, 0);
  line(0, 0, height/3, 0);
  pop();

  push();
  rotate(minuteAngle);
  strokeWeight(hw*2)
  stroke(0, 255, 0);
  line(0, 0, height/4, 0);
  pop();

  push();
  rotate(hourAngle);
  strokeWeight(hw*4)
  stroke(0, 0, 0);
  line(0, 0, height/5, 0);
  pop();

  stroke(255);
  point(0, 0);

  //push();
  //rotate(30);
  //strokeWeight(hw);
  //stroke(255, 0, 255);
  ////12
  //line(0, -height*0.375, 0, -height*0.4125);
  ////3
  //line(height*0.375, 0, height*0.4125, 0);
  ////6
  //line(0, height*0.375, 0, height*0.4215)
  ////9
  //line(-height*0.375, 0, -height*0.4125, 0)
  //rotate(30);
  //strokeWeight(hw);
  //stroke(255, 0, 255);
  ////12
  //line(0, -height*0.375, 0, -height*0.4125);
  ////3
  //line(height*0.375, 0, height*0.4125, 0);
  ////6
  //line(0, height*0.375, 0, height*0.4215)
  ////9
  //line(-height*0.375, 0, -height*0.4125, 0)
  //pop();
  
  rotate(90)
  strokeWeight(hw);
  stroke(0, 0, 0);
  textAlign(CENTER);
  text(hr + ":" + mn + ":" + sc + " Uhr", 0, height*0.1);
  text(d + "." + m + "." + "\n" + y, 0, height*0.45);
  
  //fill(255, 255, 255);
  //noStroke();
  //text(hr + ':' + mn + ':' + sc, 0, height*9/20);
}
