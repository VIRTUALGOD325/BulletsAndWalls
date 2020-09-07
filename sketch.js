var bullet,wall;

var speed, thickness, weight;

var start, startIMG;

function preload(){
  startIMG=loadImage("start.png");
}

function setup() {

  createCanvas(1600,400);

  start=createSprite(400,100,10,10);
  start.addImage("startButton", startIMG);

  bullet = createSprite(300, height/2, 10, 10)

  wall  = createSprite(1200, 200, thickness,height/2);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw(){
  background("black");

  bullet.shapeColor=color(255,255,255);

  wall.shapeColor=color(80,80,80);

  if(mousePressedOver(start)){
    bullet.velocityX = speed;
  }

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
   bullet.velocityX = 0;

   var damage = 0.5 * weight * speed * speed/22509;
    
    if(damage<10){
      wall.shapeColor=color(green);
   }

   if(damage>10){
      wall.shapeColor=color(red);
    }

  }

 drawSprites();
}