// Snake Class
class Snake {
  constructor(x, y, scale) {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.scale = scale;
    this.size = 0;
    this.tail = [];
  }
  
  // auxiliar function for set snake direction
  dir(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
  
  // auxiliar function for colisions
  collide(pos) {
    let distance = dist(this.x, this.y, pos.x, pos.y);
    return (distance < 1);
  }
  
  // Check if snake collides with itself
  death() {
    for (let i = 0; i < this.tail.length; i++){
      let pos = this.tail[i];
      if(this.collide(pos)){
        this.size = 0;
        this.tail = [];
      }
    }
  }
  
  // Increase snake's size
  grow() {
    this.size += 1;
  }

  move() {
    // each part get the position of the next part
    // this way, the last position will be forgotten
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    
    // Pass the last head position to his child after him
    if (this.size > 0) {
      this.tail[this.size - 1] = createVector(this.x, this.y);
    }
    
    // move to next position
    this.x += this.xSpeed * this.scale;
    this.y += this.ySpeed * this.scale;

    // Movement boundaries
    if (this.x < 0) {
      this.x = width - this.scale;
    } else if (this.x >= width) {
      this.x = 0;
    } else if (this.y < 0) {
      this.y = height - this.scale;
    } else if (this.y >= height) {
      this.y = 0;
    }
  }

  show() {
    // draw tail first
    for (let i = 0; i < this.tail.length; i++) {
      let color = map(i, 0, this.tail.length, 100, 240);
      fill(0 , color,0);
      rect(this.tail[i].x, this.tail[i].y, gridSize);
    }
    // then draw his head
    fill(0, 255, 0);
    rect(this.x, this.y, this.scale, this.scale);
  }
}