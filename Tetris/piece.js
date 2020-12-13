class Piece {
  constructor(shape, x = 0, y = 0, color = 1) {
    this.shape = shape;
    this.x = x;
    this.y = y;
    this.dir = 0;
    this.color = colors[color];
  }

  generateNewShape() {
    // noLoop();
    let newShape = [
      []
    ];
    let newColor = 0;
    // pick a random shape
    do {
      newShape = deepCopy(random(pieces));
      newColor = floor(random(1, 6));
    } while (this.shape === newShape || newColor === colors.indexOf(this.color));
    this.shape = newShape;
    this.color = colors[newColor];
    // loop();
  }

  draw() {
    let {
      r,
      g,
      b
    } = this.color;
    fill(r, g, b);
    // rows
    for (let row = 0; row < this.shape.length; row++) {
      // columns
      for (let col = 0; col < this.shape[row].length; col++) {
        if (this.shape[row][col] === 1) {
          rect((this.x + col) * gridSize, (this.y + row) * gridSize, gridSize);
        }
      }
    }
  }

  rotate() {
    let tempShape = deepCopy(this.shape);
    // rows
    for (let row = 0; row < this.shape.length; row++) {
      // columns
      for (let col = 0; col < this.shape[row].length; col++) {
        tempShape[col][(this.shape.length - 1) - row] = this.shape[row][col];
      }
    }
    this.shape = deepCopy(tempShape);
  }

  update(grid) {
    let landed = false;
    // rows
    for (let row = 0; row < this.shape.length; row++) {
      // columns
      for (let col = 0; col < this.shape[row].length; col++) {
        if (this.shape[row][col] != 0) {
          if (this.x + col + this.dir < 0 || this.x + col + this.dir >= grid.board[0].length) {
            this.dir = 0;
          }
          // Check if reached the bottom
          if (this.y + row + 1 >= grid.board.length) {
            landed = true;
            // pass the color value of this piece to board
            noLoop();
            for (let row = 0; row < this.shape.length; row++) {
              for (let col = 0; col < this.shape[row].length; col++) {
                if (this.shape[row][col] === 1) {
                  grid.board[this.y + row][this.x + col] = colors.indexOf(this.color);
                }
              }
            }
            loop();
          } else if (grid.board[this.y + row + 1][this.x + col + this.dir] > 0) {
            // alert that piece has landed
            landed = true;
            // pass the color value of this piece to board
            noLoop();
            for (let row = 0; row < this.shape.length; row++) {
              for (let col = 0; col < this.shape[row].length; col++) {
                if (this.shape[row][col] === 1) {
                  grid.board[this.y + row][this.x + col] = colors.indexOf(this.color);
                }
              }
            }
            loop();
          }
        }
      }
    }
    // if player set to move to left or right
    if (this.dir != 0) {
      // go to defined direction
      this.x += this.dir;
      // and reset
      this.dir = 0;
    } else if (!landed) {
      // if no direction has been set, so keep going bottom
      this.y += 1;
    } else if (landed) {
      noLoop();
      grid.update();
      loop();
      // go back to top
      this.y = 0;
      this.x = 3;
      this.generateNewShape();
    }
  }
}