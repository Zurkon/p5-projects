class Board {
  constructor(width, height, gridSize) {
    this.height = height;
    this.width = width;
    this.gridSize = gridSize;
    this.board = testBoard;
    // this.board = Array.from(new Array(this.height / this.gridSize), row => {
    //   return Array.from(new Array(this.width / this.gridSize), col => {
    //     return 0;
    //     // return Math.floor(Math.random() * 6);
    //   });
    // });
    this.color = 51;
  }

  // Just paint the board positions with non-zero values
  draw() {
    // Variable for the colors
    let red, green, blue;
    // get rows and columns count
    let cols = this.width / this.gridSize;
    let rows = this.height / this.gridSize;
    // stroke color for each box
    stroke(255, 255, 255, 10);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // if this box position have a number greater than 0
        if (this.board[r][c] !== 0) {
          // fill this box with his current color
          stroke(0);
          // Object.values returns each value from object inside a array
          // We use destructuring assignment to assign 
          // each value from array on r, g, b variables
          [red, green, blue] = Object.values(colors[this.board[r][c]]);
          fill(red, green, blue);
          rect(c * gridSize, r * gridSize, gridSize);
        }
      }
    }
  }

  update() {
    // get rows and columns count
    let cols = this.width / this.gridSize;
    let rows = this.height / this.gridSize;
    // for (let row = 0; row < rows; row++) {
    for (let row = rows-1; row >= 0; row--) {
      let isFilled = true;
      for (let col = 0; col < cols; col++) {
        if (this.board[row][col] === 0) {
          isFilled = false;
        }
      }
      if(isFilled) {
        // print("Antes: " + this.board);
        this.board.splice(row, 1);
        this.board.unshift([0,0,0,0,0,0,0,0,0,0]);
        row++;
        // print("Depois: " + this.board);
      }
      // print(`linha: ${r} = ${count}`);
    }
  }
}