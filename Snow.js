class snow{
    constructor(x,y,r){

        var options = {
            isStatic:false,
            //restitution:0.5,
            friction: 2
           
        }

        this.body = Bodies.circle(x,y,r,options)
        this.x = x;
        this.y = y;
        this.r = r;  
        this.image = loadImage("snow5.webp")  

        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position;
        push()
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
        pop()
    }
    

}