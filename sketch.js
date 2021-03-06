
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1
var box1,box2,box3;
var ground;

function setup() {
	var canvas=createCanvas(1600,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbin=new Dustbin(1200,650);
	ground=new Ground(width/2,670,width,20);
	paper1 =new Paper(100,450,40);
	//paper1.shapeColor="white";

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
    Render.run(render);
}

function draw() {
	rectMode(CENTER);
	background(230);
   
	
	paper1.display();
	ground.display();
	dustbin.display();
  
	
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100})
	}
}


