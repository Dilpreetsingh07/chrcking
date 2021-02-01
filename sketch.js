
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paddle1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	paddle1 = new Paddle(400,200,400,10);
    circle1 = new Paper(400,400,PI/2);

	Engine.run(engine);
  
}


function draw() {
  
  background("black");
  paddle1.display();
  circle1.display();

 
}



