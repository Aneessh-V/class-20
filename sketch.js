var boy,boyImg;
var tnt,tntImg;
var backgroundSPRITE,backgroundImg;
var bomb,bombGrp;

function preload(){
  
  boyImg = loadImage("boy-.png");
  tntImg = loadImage("tnt-.png");
  backgroundImg = loadImage("background.png")
  
}
function setup(){
  createCanvas(400,400);
  background("blue");

  bombGrp = new Group;
 
  // Moving background
  backgroundSPRITE=createSprite(0,200,800,500);
  backgroundSPRITE.addImage(backgroundImg);
  backgroundSPRITE.velocityX = -3;
  
  boy = createSprite(25,350,30,30);
  boy.addImage(boyImg);
  boy.scale =0.2;
  
}

function draw(){

  background(backgroundImg);

 if (backgroundSPRITE.x < 0){
  backgroundSPRITE.x = backgroundSPRITE.width/5;
 }

 boyMovement();
 displayObstacles();

 if(bombGrp.isTouching(boy)){
  boy.velocityY=0;
  bombGrp.setvelocityXEach=0;
  backgroundSPRITE.velocityX=0;
  tnt.velocityX=0;
}

 drawSprites();

}

function displayObstacles(){

  if(frameCount%160===0){
    var bomb = createSprite(380,450,15,15);
    bombGrp.add(bomb);
    bomb.y = Math.round(random(450,50));
    bomb.velocityX = -3;
    bomb.addImage(tntImg)
    bomb.scale = 0.3;
  }

}

function boyMovement(){
   
 
  if(keyDown("UP_ARROW")) {
    boy.velocityY = -5;
  }

  if(keyDown("DOWN_ARROW")) {
    boy.velocityY = 5;
  }

  if(keyDown("SPACE")) {
    boy.velocityY = 0;
  }

  

}