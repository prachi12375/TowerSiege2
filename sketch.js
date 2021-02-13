const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1400,650);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(700, 640, 10000, 20);
  stand1 = new Stand(800, 600, 500, 20);
  stand2 = new Stand(1200, 350, 350, 20);

  block_1 = new Block(625, 575, 50, 50);
  block1 = new Block(675, 575, 50, 50);
  block2 = new Block(725, 575, 50, 50);
  block3 = new Block(775, 575, 50, 50);
  block4 = new Block(825, 575, 50, 50);
  block5 = new Block(875, 575, 50, 50);
  block6 = new Block(925, 575, 50, 50);
  block_6 = new Block(975, 575, 50, 50);

  block_7 = new Block(650, 525, 50, 50);
  block7 = new Block(700, 525, 50, 50);
  block8 = new Block(750, 525, 50, 50);
  block9 = new Block(800, 525, 50, 50);
  block10 = new Block(850, 525, 50, 50);
  block11 = new Block(900, 525, 50, 50);
  block_11 = new Block(950, 525, 50, 50);

  block_12 = new Block(675, 475, 50, 50);
  block12 = new Block(725, 475, 50, 50);
  block13 = new Block(775, 475, 50, 50);
  block14 = new Block(825, 475, 50, 50);
  block15 = new Block(875, 475, 50, 50);
  block_15 = new Block(925, 475, 50, 50);

  block_16 = new Block(700, 425, 50, 50);
  block16 = new Block(750, 425, 50, 50);
  block17 = new Block(800, 425, 50, 50);
  block18 = new Block(850, 425, 50, 50);
  block_18 = new Block(900, 425, 50, 50);

  block_19 = new Block(725, 375, 50, 50);
  block19 = new Block(775, 375, 50, 50);
  block20 = new Block(825, 375, 50, 50);
  block_20 = new Block(875, 375, 50, 50);

  block_21 = new Block(750, 325, 50, 50);
  block22 = new Block(800, 325, 50, 50);
  block_22 = new Block(850, 325, 50, 50);

  block_23 = new Block(775, 275, 50, 50);
  block_24 = new Block(825, 275, 50, 50);

  block_25 = new Block(800, 225, 50, 50);


  block26 = new Block(1100, 325, 50, 50);
  block27 = new Block(1150, 325, 50, 50);
  block28 = new Block(1200, 325, 50, 50);
  block29 = new Block(1250, 325, 50, 50);
  block30 = new Block(1300, 325, 50, 50);

  block31 = new Block(1125, 275, 50, 50);
  block32 = new Block(1175, 275, 50, 50);
  block33 = new Block(1225, 275, 50, 50);
  block34 = new Block(1275, 275, 50, 50);

  block35 = new Block(1150, 225, 50, 50);
  block36 = new Block(1200, 225, 50, 50);
  block37 = new Block(1250, 225, 50, 50);

  block38 = new Block(1175, 175, 50, 50);
  block39 = new Block(1225, 175, 50, 50);

  block40 = new Block(1200, 125, 50, 50);
 

  //ball holder with slings
  ball = Bodies.circle(200, 400, 40);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:200,y:400});

}
function draw() {
  background(0); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(25);
  fill(255);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks. Press space key for another chance.",100,50);

  ground.display();
  strokeWeight(2)
  stroke(255);
  fill("orange");
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(255);
  fill("purple");
  block_1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block_6.display();
  fill("pink");
  block_7.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block_11.display();
  fill("turquoise");
  block_12.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block_15.display();
  fill("blue");
  block_16.display();
  block16.display();
  block17.display();
  block18.display();
  block_18.display();
  fill("yellow")
  block_19.display();
  block19.display();
  block20.display();
  block_20.display();
  fill("lime")
  block_21.display();
  block22.display();
  block_22.display();
  fill("magenta")
  block_23.display();
  block_24.display();
  fill("violet")
  block_25.display();
  fill("cyan")
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  fill("pink")
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  fill("blue")
  block35.display();
  block36.display();
  block37.display();
  fill("magenta")
  block38.display();
  block39.display();
  fill("lime")
  block40.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,80, 80);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball);
  }
}