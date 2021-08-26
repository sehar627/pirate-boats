const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var ball=[]
var boats=[]


var cannonBall

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(150, 150, 100, 50, -PI/4);
  

  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  
  for(var i=0;i<ball.length;i++){
showCannonBalls(ball[i],i)
  }

  cannon.display();
  tower.display();
  showBoat()
  //cannonBall.display()
 
}



function keyPressed(){
  if(keyCode===DOWN_ARROW){
    cannonBall = new CannonBall(180,150,40);
    ball.push(cannonBall)
  }

}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    
    ball[ball.length-1].shoot()
   
  }
}


function showCannonBalls(ball,index){
  ball.display()
  if(ball.body.position.x>=width||ball.body.position.y>=height){
    World.remove(world,ball)
    balls.splice(index,1)
  }
}

function showBoat(){
  
 
  
      var boat = new Boat(width,400, 150, 150);
      boats.push(boat);
       console.log(boat)
    

    for (var i = 0; i < boats.length; i++) {
      Matter.Body.setVelocity(boats[i].body, {
        x: -0.9,
        y: 0
      });

      boats[i].display();
      //pirateLaughSound.play()
    }
  
}