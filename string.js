class Tie {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 120
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if (this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(20);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}