class slingShot{
constructor(bodyA,pointB){
var options= {
    bodyA:bodyA,
    stiffness:0.04,
    length:10,
pointB:pointB
}
this.sling=Constraint.create(options)
this.pointB=pointB
World.add(world,this.sling)
}
attach(body){
    this.sling.bodyA=body
}
fly(){
    this.sling.bodyA=null
}
display(){
    if(this.sling.bodyA){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}
}