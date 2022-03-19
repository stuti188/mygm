var backgroundimg,backgroundsprite
var obstop1,obstop2;
var obsbottom1,obsbottom2,obsbottom3;


function preload ()
{
backgroundimg=loadImage("assets/bg.png");
balloonimg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
obstop1 = loadImage("assets/obsTop1.png");
obstop2 = loadImage("assets/obsTop2.png");
obsbottom1 = loadImage("assets/obsBottom1.png");
obsbottom2 = loadImage("assets/obsBottom2.png");
obsbottom3 = loadImage("assets/obsBottom3.png")
}
function setup()
{
  createCanvas(800,800);

  
backgroundsprite = createSprite(400,400,200,220);
backgroundsprite.addImage(backgroundimg);
balloon = createSprite(100,200,50,50);
balloon.addAnimation("balloonn",balloonimg);
balloon.scale=0.5;



}
function draw()
{
background("white");
drawSprites();
if(keyDown(UP_ARROW)){
  balloon.velocityY=-5;
}
balloon.velocityY=balloon.velocityY+0.3;
spawnTopObstacles();
spawnBotttomObstacles();
}

function spawnTopObstacles()
{
  if(frameCount% 100===0){
  topobstacle1 = createSprite(800,200,50,50);
  topobstacle1.velocityX = -4;
  topobstacle1.y = Math.round(random(50,200));
  var num = Math.round(random(1,2))
  switch(num){
    case 1: topobstacle1.addImage(obstop1);
           break;
    case 2: topobstacle1.addImage(obstop2);
           break;


  }
  topobstacle1.scale = 0.2;
  topobstacle1.lifetime=200;
}

}
function spawnBotttomObstacles (){

  if(frameCount% 150===0){
    bottomobs = createSprite(800,675,50,50);
    bottomobs.velocityX = -4;
    var num = Math.round(random(1,3))
    switch(num){
      case 1 : bottomobs.addImage(obsbottom1);
             break;
      case 2 : bottomobs.addImage(obsbottom2);
             break;
      case 3 : bottomobs.addImage(obsbottom3);
             break;
    }
    bottomobs.scale =0.1;
    bottomobs.lifetime=200;
  }
}
