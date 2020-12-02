
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,invisibleGround;
var survivalTime=0;
var score=0;


function preload(){
  createCanvas(600, 200);
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1 
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
  
  
}


function draw() {
  background("white")

  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  
  
  
  
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 50) {
        monkey.velocityY = -12;
    }
  
  
   //stop monkey from falling down
  monkey.collide(ground);
  spawnObstacles()
  spawnFood()
  
  
  
  stroke("white");
  textSize(20)
  fill("white")
  text("Score: "+ score, 500,50);
  
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50)
  
  drawSprites();
  
}


function spawnObstacles(){
  //write code here to spawn the obstacles
  if (frameCount % 300 === 0) {
     obstacle= createSprite(400,310,10,40);
   
    obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 150;
    
    
    
    //adding obstacle to the group
   obstacleGroup.add(obstacle);
    }
}

function spawnFood(){

//write code here to spawn the food
  if (frameCount % 80 === 0) {
     banana= createSprite(400,180,10,40);
   
    banana.addImage(bananaImage);
   banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 150;
    
    
    
    //adding banana to the group
  FoodGroup.add(banana);
    }
}




