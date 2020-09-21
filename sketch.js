var climber,climberImage;
var door,doorImage;
var ghost,ghostImage;
var tower,towerImage;


function preload(){
climberImage=loadImage("climber.png");
doorImage=loadImage("door.png");
ghostImage=loadImage("ghost-standing.png");
towerImage=loadImage("tower.png");
}

function setup(){
createCanvas(600,600);
tower=createSprite(300,300);
tower.addImage(towerImage);
tower.velocityY=-5;
ghost=createSprite(300,300);
ghost.addImage(ghostImage);
ghost.scale=0.5;
}

function draw(){
background( "white");
  
 
if (tower.y < 0){
 tower.y = 300;
} 
  
  
drawSprites()
}
