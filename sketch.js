

function setup() {
  createCanvas(800,400);

  hr = hour(); 
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  arc(500, 550, 70, 70, PI + QUARTER_PI, TWO_PI);

  scAngle = map(sc,0,60,0,360);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,200,1000,0);
  
  mnAngle = map(mn,0,60,0,360);
  stroke(0,255,0);
  strokeWeight(7);
  line(50,550,600,0);
  
  hrAngle = map(hr,0,60,0,360);
  stroke(0,0,255);
  strokeWeight(7);
  line(800,475,100,0);
  //rectMode(centre);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}