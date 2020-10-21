//define a function and call it with different arguments/objects everytime you wana use it
//DRY- Do not repeat yourself

var movingBlock, fixedBlock;

var trex, obstacle;

function setup() {
  createCanvas(800,400);

  movingBlock = createSprite(400, 200, 50, 50);
  fixedBlock = createSprite(460, 200, 50, 50);
  
  trex = createSprite(300, 100, 50, 50);
  obstacle = createSprite(200, 100, 50, 50);
}

function draw() {
  background(255,255,255);  

  trex.x = mouseX;
  trex.y = mouseY;

  //passing objects on which we want to check isTouching condition as an argument...movingBlock, fixedBlock
  if(isTouching(movingBlock, fixedBlock)){
    movingBlock.shapeColor = "blue";
    fixedBlock.shapeColor = "blue";
  }else{
    movingBlock.shapeColor = "red";
    fixedBlock.shapeColor = "red";
  }
  //trex and ob.
  if(isTouching(trex, obstacle)){
    trex.shapeColor = "blue";
    obstacle.shapeColor = "blue";
  }else{
    trex.shapeColor = "red";
    obstacle.shapeColor = "red";
  }

  drawSprites();
}

