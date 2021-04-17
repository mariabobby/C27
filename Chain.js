class Chain{
    constructor(bodyA,bodyB){
        var Option = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:20
    
        }
        this.object = Constraint.create(Option)
        World.add(world,this.object)   
    }
    display(){
        var pointA = this.object.bodyA.position;
        var pointB = this.object.bodyB.position;
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}