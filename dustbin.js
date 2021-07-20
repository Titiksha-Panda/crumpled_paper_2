class dustbin{

  constructor(x,y,w,h) {
    var options={
        isStatic:true
    }
    this.x=x;
    this.y=y;
    this.h=h;
    this.w=w;
    this.body=Bodies.rectangle(x, y, w, h , options);
    World.add(world, this.body);
    this.image = loadImage("dustbingreen-1.png");
   
  }
   display() 
   {	var dustbinPos=this.body.position;		

    push()
    translate(dustbinPos.x, dustbinPos.y);
    rectMode(CENTER)
    strokeWeight(7);
    fill("red")
    rect(0,0,this.w, this.h);
    pop()
    


   }
}

