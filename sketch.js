
var trex ,trex_running;
var ground;
var groundImage;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")  
groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  ground = createSprite(300,180,600,10);
  //create a trex sprite
 trex = createSprite(50,160);
 trex.addAnimation("trexRunning",trex_running);
 trex.scale = 0.5;
 edges = createEdgeSprites();
 ground.velocityX = -10;
 ground.addImage("groundImage",groundImage);
 ground.x = ground.width/2
}

function draw(){
  background("white")
  drawSprites();
if(keyDown("space")){
  trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 1.0;
trex.collide(ground);
if(ground.x < 0){
  ground.x = ground.width/2;
}
}
