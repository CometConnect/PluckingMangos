class SLING
{
    constructor(bodyA, pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body)
    {
        this.sling.bodyA = body;
    }
    
    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        push();
        line( this.sling , this.pointB.x , this.pointB.y );
        pop();
    }
}