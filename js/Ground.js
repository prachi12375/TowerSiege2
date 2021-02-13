class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(700,640,10000,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        stroke(255);
        strokeWeight(3)
        fill("magenta");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,10000,20);
    }
}