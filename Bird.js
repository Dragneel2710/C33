class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.smoke = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (this.body.position.x>200 && this.body.speed>15){
      var red = [this.body.position.x,this.body.position.y]
      this.smoke.push(red);
    }
    //console.log(this.smoke[0]);
    super.display();
    for (var i = 0; i < this.smoke.length; i++){
      image(this.image2, this.smoke[i][0],this.smoke[i][1])
    }
  }
}
