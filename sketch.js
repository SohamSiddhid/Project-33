const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;
 
var SnowObjects = [];
var bgImage;
var groundObj;


function preload(){
  bgImage =  loadImage("snow1.jpg");
  carImg = loadImage("car.png");

}
function setup() {
 var canvas = createCanvas(windowWidth,windowHeight);
     engine = Engine.create();
     world = engine.world;

  //createSprite(400, 200, 50, 50);

 // snowObj = new snow(400,200,30);
   
 groundObj = new Ground(600,600,windowWidth,20)
 car = createSprite(500,400,50,50)
 car.addImage(carImg);
 car.scale = 0.2;
 car.velocityX = 4
  

}

function draw() {
  background(bgImage); 
  
  Engine.update(engine);


  drawSprites();

  
  // snowObj.display();
  //groundObj.display();
  
  if(frameCount%30 === 0){
    
      SnowObjects.push(new snow(random(100,800),0,10))
  
  }
  
  for(var h = 0; h < SnowObjects.length; h++) {
    SnowObjects[h].display();
  }



}