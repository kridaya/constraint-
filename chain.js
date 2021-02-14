
class chain {
    constructor(bodyA,bodyB){

       var Cons_options={
           bodyA:bodyA,
           bodyB:bodyB,
           stiffness:0.04,
           length:10
       }


        this.Chain = Constraint.create(Cons_options);
        World.add(world,this.Chain)
    }


    display(){
       var pointA=this.Chain.bodyA.position;
       var pointB=this.Chain.bodyB.position; 
     strokeWeight(5);
     line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}































