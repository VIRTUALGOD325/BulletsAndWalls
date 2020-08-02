var bullet,wall;

var speed, thickness, weight;

function setup() {

  createCanvas(1600,400);

  bullet = createSprite(100, height/2, 10, 10);
  bullet.velocityX = speed;


  wall  = createSprite(1200, 200, thickness,height/2);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("black");

  bullet.shapeColor=color(255,255,255);

  wall.shapeColor=color(80,80,80);

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