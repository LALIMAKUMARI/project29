class Slingshot {
    constructor(x,y,r)
      {
          var options = { 
              density: 1, 
              frictionAir: 1
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("polygon.png");
          this.body=Bodies.circle(50,600,80);
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var polygonPos=this.body.position;		
              push()
              //translate(polygonPos.x, polygonPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image,this.body.position.x,this.body.position.y,100,100)
              pop()
              
      }
  }
  
  