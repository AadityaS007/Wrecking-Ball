const Engine = Matter.Engine
const Constraint = Matter.Constraint
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground;

function preload() {

}

function setup() {

    createCanvas(displayWidth - 500, displayHeight - 300)

    engine = Engine.create();
    world = engine.world;

    // Creating Bodies
    ground = new Ground((displayWidth - 500) / 2, displayHeight - 310, displayWidth - 500, 20)
    //creating boxes
    box1 = new Box(600, 570, 50, 50)
    box2 = new Box(600, 500, 50, 50)
    box3 = new Box(600, 450, 50, 50)
    box4 = new Box(600, 400, 50, 50)
    box5 = new Box(600, 350, 50, 50)
    box6 = new Box(600, 300, 50, 50)
    box7 = new Box(600, 250, 50, 50)
    box8 = new Box(600, 200, 50, 50)
    box9 = new Box(600, 150, 50, 50)
    box10 = new Box(600, 100, 50, 50)

    box11 = new Box(550, 570, 50, 50)
    box12 = new Box(550, 500, 50, 50)
    box13 = new Box(550, 450, 50, 50)
    box14 = new Box(550, 400, 50, 50)
    box15 = new Box(550, 350, 50, 50)
    box16 = new Box(550, 300, 50, 50)
    box17 = new Box(550, 250, 50, 50)
    box18 = new Box(550, 200, 50, 50)
    box19 = new Box(550, 150, 50, 50)
    box20 = new Box(550, 100, 50, 50)

    ball = new Ball(200, 400, 80, 80)
    rope = new Rope(ball.body, { x: 200, y: 10 })

}

function draw() {
    background("lightblue")
    Engine.update(engine);

    //Displaying Objects
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();
    rope.display();

}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })

}