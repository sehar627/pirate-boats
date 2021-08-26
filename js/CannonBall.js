class CannonBall {
    constructor(x, y,radius) {
      var options = {
       isStatic:true
      };
      this.radius=radius
  //create circular body
  this.body=Bodies.circle(x,y,radius,options)
     
  //add Image
  this.image=loadImage("assets/cannonball.png")
      
      World.add(world, this.body);
    }
  //shoot function
  shoot(){
    Matter.Body.setStatic(this.body,false)
  Matter.Body.setVelocity(this.body,{x:8,y:-8})
  }
  
    display() {
     
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      //image function
     image(this.image,0,0,this.radius,this.radius)
      pop();
  
      }
    }