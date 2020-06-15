var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function keyPressed()
{
	if(keyCode=== UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:50,y:-55});
	}
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	paper = new Paper(200,600,20);
	rect1 = new Log(550,600,20,100);
	rect2 = new Log(650,600,20,100);
	rect3 = new Log(600,640,100,20);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();

  drawSprites();
 
}



