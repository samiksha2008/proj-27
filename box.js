 class Box 

{
  constructor(x, y, w, h) 
  {
    let options = {
      friction: 0.3,
      restitution: 0.6
    };
    
   
    this.width =width;
    this.height =height;
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    rect(0, 0, this.width, this.height);
    pop();
  }
}