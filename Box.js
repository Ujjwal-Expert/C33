class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.visibility=225;
  }
  display(){
    if(this.body.speed<4){
    super.display();
    }
    else{
      push();
      World.remove(world,this.body);
      this.visibility=this.visibility - 4;
      tint(225,this.visibility);
      image(this.image, this.body.position.x, this.body.position.y);
      pop();
    }
  }
} 
