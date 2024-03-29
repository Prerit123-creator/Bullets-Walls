var wall, thickness;
var bullet, weight, speed;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 90, 10);
  bullet.shapeColor = color(255);
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(255);
  wall.thickness = random;
  bullet.weight = weight;
  bullet.velocityX = speed;

}

function draw() {
  background(0);



  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var damage = 0.5 * weight* speed* speed/(thickness*thickness*thickness);

    if (damage>10){

      wall.shapeColor = color(255,0,0);

    }

    if(damage<10){

      wall.shapeColor = color(0,255,0);

    }
  }
  
  drawSprites();
}

function hasCollided(bullet, wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;

}

