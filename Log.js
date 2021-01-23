class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.visibility=225;
  }
  display(){
    if(this.body.speed<6){
      super.display();
    }
    else{
      push();
      World.remove(world,this.body);
      this.visibility=this.visibility - 5;
      rotate(this.body.angle);
      tint(225,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
  }
}