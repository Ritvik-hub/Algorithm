var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(0); 
  console.log(movingRect.x);
  movingRect.x= World.mouseX;
  movingRect.y=World.mouseY;
  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
   fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
   movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
   fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  drawSprites();
}