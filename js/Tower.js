
class Tower {
    constructor(x, y, width, height) {
      var options = {

      
      };
    
    this.width = width;
    this.height = height;
      
    }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    pop();
  }
}
