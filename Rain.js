class Rain{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:0.1
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.rain)
    }
    display(){
        var pos = this.rain.position
        push()
        ellipseMode("RADIUS")
        fill("blue")
        ellipse(pos.x,pos.y,this.radius)
        pop()
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
}