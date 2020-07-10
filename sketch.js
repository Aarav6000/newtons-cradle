var ball1, ball2, ball3, ball4, ball5;
var tie1, tie2, tie3, tie4, tie5;
var base;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(300, 350, 25);
	ball2 = new Ball(350, 350, 25);
	ball3 = new Ball(400, 350, 25);
	ball4 = new Ball(450, 350, 25);
	ball5 = new Ball(500, 350, 25);

	tie1 = new Tie(ball1.body, {x: 300, y: 200});
	tie2 = new Tie(ball2.body, {x: 350, y: 200});
	tie3 = new Tie(ball3.body, {x: 400, y: 200});
	tie4 = new Tie(ball4.body, {x: 450, y: 200});
	tie5 = new Tie(ball5.body, {x: 500, y: 200});

	base = new Base(400, 180, 300, 60)

	Engine.run(engine);
}


function draw() {

  	rectMode(CENTER);
  	background(200);

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	tie1.display();
	tie2.display();
	tie3.display();
	tie4.display();
	tie5.display();

	base.display();
}

function mouseDragged() {
	if (keyDown("r")) {
		Body.setPosition(ball5.body, {x: mouseX, y: mouseY});
	} else {
		Body.setPosition(ball1.body, {x: mouseX, y: mouseY});
	}
}