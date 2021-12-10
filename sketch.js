const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var object;

function setup() {
  var canvas = createCanvas(400,400);
  
  var object_options={
    isStatic: true
  } 
  engine = Engine.create();
  world = engine.world;
  object = Bodies.rectangle(200,100, 50,50, object_options);
  World.add(world,object);

  console.log(object.position.y);

   
}

function draw() {
  background(0);  

  Engine.update(engine);
  rectMode(CENTER)
  rect(object.position.x, object.position.y, 50, 50);
  drawSprites();
}