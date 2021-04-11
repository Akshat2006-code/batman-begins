class Drops {
    constructor(x,y) {
        var options ={
            restitution:0.4,
            friction:0.1
        }
      
        this.body = Bodies.circle(x, y,options);      
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        //ellipseMode(RADIUS);
       // ellipse(0, 0, this.r,this.r);
        pop();
    }

};