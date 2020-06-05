const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,dustbin,dustbin2;
var slingShot, ball1;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
 
    dustbin = new Dustbin(1100,300,200,200);

    ground = new Ground(600,height,1200,20);
  
    ground2 = new Ground(1200,300,20,600);
    
    ball1 = new Ball(300,180,60,60);
    
    slingshot = new SlingShot(ball1.body,{x:200, y:300});

}

function draw(){
    background(100);
    Engine.update(engine);
   
    ball1.display();
    ground.display();
    slingshot.display();    
    dustbin.display();
    ground2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

