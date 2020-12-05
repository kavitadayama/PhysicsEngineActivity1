//NameSpacing
const Engine = Matter.Engine; // universe
const World = Matter.World; // World
const Bodies = Matter.Bodies;

var engine, ourWorld;

var object;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  ourWorld = engine.world;

  var options = {
    isStatic: true
  }

  object = Bodies.rectangle(100,200,50,50, options);
  World.add(ourWorld, object);

  console.log(object);
 // console.log(object.position.x);
  //console.log(object.position.y);


 
}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  drawSprites();
}