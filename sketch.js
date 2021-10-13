var newX=200
var score =0
var gameState ="play"
function preload(){
  dog1image = loadImage("Dog 2.png")
  dog2image = loadImage("dog 1.png")
  boneimage = loadImage("bone ..png")
  milkimage = loadImage("milk.png")
  finishimage = loadImage("finish line 1.png")
}
function setup() {

  createCanvas(1200,800);
 dog1 = createSprite(20, 100, 20, 100);
 dog2 = createSprite(20,300,20,100);
 
 dog2.addImage(dog1image);
 dog2.scale = 0.2;
 dog1.addImage(dog2image);
 

 dog1.scale = 0.5;
 dog1.velocityX = 1;
 dog2.velocityX = 1;
 foodgroup = new Group()
 

 for(var i=0; i<500; i++){
   if(i%30==0){
  bone1=new Bone (newX,random([250,300,350,400,450,500,550]))
  foodgroup.add(bone1.spt)}

  if(i%70===0){
  milk1=new Milk (newX,random([250,300,400,450,500,550]))
  foodgroup.add(milk1.spt)}

  
 
  newX+=50
 }

end = createSprite(newX,height/2)
end.addImage(finishimage)
 
}

function draw() {
  background(0);  
  drawSprites();
  textSize(20)
  fill ("white")
  text ("score ,"+score,dog2.x,50)
  
 camera .position.x = dog2.x+200
 if(gameState === "play"){

 
  if(keyDown("right")){
   
    dog2.x+=10;
  }
  if(keyDown("up")){

    dog2.y-=5;
  }

  if(keyDown("down")){

    dog2.y+=5;
  }
 }

  if(dog2.isTouching(end)){
    gameState = "end"
  }


  dog2.collide(foodgroup,kill)
    if(frameCount%30===0){
      dog1.velocityX += 0.5;
    }
if(gameState==="end"){
  text("end",width/2,height/2)
  if(dog2.x>dog1.x){
    text("YOU WON",dog2.x,50)
    }
else{
  text("YOU LOST",dog2.x,50)
}
  
  }

  
}



function kill(dog,food){
  food.destroy()
  score++

}