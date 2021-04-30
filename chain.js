class Chain{
    constructor(bodyA,bodyB){
        var options = {
            length : 100,
            stiffness : 0.3,
            bodyA : bodyA,
            bodyB: bodyB
        }
        this.chain =Matter.Constraint.create(options)
        World.add(world,this.chain)
    }

    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position

        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
}