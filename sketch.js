var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(500,500,200,70);
  gameObject2 = createSprite(100,100,600,55);

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameObject2)) 
  {
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  } else 
  {
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  
  bounceOff(movingRect,fixedRect);
  drawSprites();
}
