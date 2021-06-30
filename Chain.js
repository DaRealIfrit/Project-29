class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.pointB = pointB
        this.chain = Constraint.create(options)
        World.add(world, this.chain)    
    }
    attach(body){
        this.chain.bodyA = body;
    }
    
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        strokeWeight (5)
        line (pointA.x, pointA.y, pointB.x, pointB.y)
    }

    }
}










/*class Chain{
constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    this.pointB = pointB
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
}
attach(body){
    this.sling.bodyA = body;
}

fly(){
    this.sling.bodyA = null;
}

display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
    }
}*/