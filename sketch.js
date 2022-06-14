var road
var man
var carG1
var carG2
var carG3
var carG4
var distance=0;
var highestdistance=0
var logo,logo2
var over
var earning=0
var highestearning=0
var PLAY=1;
var END=2;
var gameState=1;
function preload(){
  roadImage=loadImage("Road.png")
  runner=loadAnimation("r.gif")
  OverImg=loadImage("Over.png")
sedanImage=loadImage("sedan.png")
suvImage=loadImage("suv.png")
truckImage=loadImage("truck.png")
supercarImage=loadImage("supercar.png")
mi=loadImage("money.png")
mi2=loadImage("money2.png")
mi3=loadImage("money3.png")
mi4=loadImage("money4.png")
}
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  
 road=createSprite(200,400);
  road.addImage(roadImage);
  road.velocityX=-8;
 player=createSprite(100,275,20,20)
 player.addAnimation("running",runner)
 player.scale=0.5
 player.velocityX=1


 over=createSprite(500,300,200,200)
 over.addImage(OverImg)
 over.scale=0.5
 over.visible=false
 carG1=new Group()
 carG2=new Group()
 carG3=new Group()
 carG4=new Group()
 moneyG=new Group()
 moneyG2=new Group()
 moneyG3=new Group()
 moneyG4=new Group()
}
function draw() {
  background(200)
 
  
  if(gameState===1){
  
player.y=World.mouseY
player.x=World.mouseX
  player.velocityX=-5

  edges= createEdgeSprites();
  player.collide(edges);
  drawSprites()
  textSize(20);
  fill("ORANGE");
  text("Distance: "+ distance,300,30);
  text("Highest Distance: "+ highestdistance,600,30);
  text("Earning:₹ "+ earning,1200,30);
  text("Highest Earning:₹ "+ highestearning,900,30);
  distance = distance + Math.round(getFrameRate()/50);
  //code to reset the background
  if(road.x <0){
    road.x = width/2;
  }
  var select_oppPlayer = Math.round(random(1,4));
  
  if (frameCount % 250 == 0) {
    if (select_oppPlayer == 1) {
      Car1();
    } else if (select_oppPlayer == 2) {
      Car2();
    } else if(select_oppPlayer == 3) {
      Car3();
    }
    else{
      Car4()
    }


  }
 
  if(carG1.isTouching(player)){
    gameState = 2;
    car1.velocityY = 0;
    
   }
   
   if(carG2.isTouching(player)){
     gameState = 2;
     car2.velocityY = 0;
    
   }
   
   if(carG3.isTouching(player)){
     gameState = 2;
     car3.velocityY = 0;
     
   }
   if(carG4.isTouching(player)){
    gameState = 2;
    car4.velocityY = 0;
    
  } 
  Money()
  Money2()
  Money3()
  Money4()
 if(moneyG.isTouching(player)) {
  moneyG.destroyEach()
  earning=earning+2000
}
if(moneyG2.isTouching(player)) {
  moneyG2.destroyEach()
  earning=earning+500
}
if(moneyG3.isTouching(player)) {
  moneyG3.destroyEach()
  earning=earning+100
}
if(moneyG4.isTouching(player)) {
  moneyG4.destroyEach()
  earning=earning+200
}
  
  
  
}
if (gameState === 2) {
  
  over.visible=true
 

  
   player.velocityY = 0;
   
 
   carG1.destroyEach();
  
 
   carG2.destroyEach();
   
 
   carG3.destroyEach();
   
   carG4.destroyEach();
  
   if (distance>highestdistance){
     highestdistance=distance
   }
   if (earning>highestearning){
    highestearning=earning
  }
   textSize(32)
   text("press Space key",420,200)
   if (keyDown("SPACE"))
  {
    reset();
  }
  
}

}
function Car1(){
  car1 =createSprite(500,Math.round(random(50, 250)));
  car1.scale =0.90;
  car1.velocityX = -(20 + 2*distance/150);
  car1.addImage(sedanImage);
  car1.setLifetime=170;
  carG1.add(car1);
}

function Car2(){
 car2=createSprite(700,Math.round(random(50, 250)));
  car2.scale =0.90;
  car2.velocityX = -(20 + 2*distance/150);
  car2.addImage(suvImage);
  car2.setLifetime=170;
  carG2.add(car2);
}

function Car3(){
  car3 =createSprite(900,Math.round(random(300, 500)));
  car3.scale =0.90;
  car3.velocityX = -(15+ 2*distance/150);
  car3.addImage(truckImage);
  car3.setLifetime=170;
  carG3.add(car3);
}
function Car4(){
  car4 =createSprite(1100,Math.round(random(300, 500)));
  car4.scale =2;
  car4.velocityX = -(50 + 2*distance/150);
  car4.addImage(supercarImage);
  car4.setLifetime=170;
  carG4.add(car4);
}
function Money(){
  if (frameCount % 150 == 0) {
  money=createSprite(Math.round(random(1,500)),Math.round(random(1,500)))
  money.addImage(mi)
  money.scale=0.1
  money.setlifetime=50
  moneyG.add(money)
}
}
function Money2(){
  if (frameCount % 200 == 0) {
  money2=createSprite(Math.round(random(1,500)),Math.round(random(1,500)))
  money2.addImage(mi2)
  money2.scale=0.1
  money2.setlifetime=50
  moneyG2.add(money2)
}
}
function Money3(){
  if (frameCount % 250 == 0) {
  money3=createSprite(Math.round(random(1,500)),Math.round(random(1,500)))
  money3.addImage(mi3)
  money3.scale=0.1
  money3.setlifetime=50
  moneyG3.add(money3)
}
}
function Money4(){
  if (frameCount % 300 == 0) {
  money4=createSprite(Math.round(random(1,500)),Math.round(random(1,500)))
  money4.addImage(mi4)
  money4.scale=0.1
  money4.lifetime=50
  moneyG4.add(money4)
}
}
function reset(){
  over.visible=false
  gameState=1
  distance=0
 player.x=100
 earning=0
}