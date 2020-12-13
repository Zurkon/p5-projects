let piece = new Piece(piece_S, 3, -1, 5);
let gameBoard = new Board(board.width, board.height, gridSize);

// Program variables
let timer = 0;
let maxTimer = 30;

function setup() {
  createCanvas(200, 400);
  frameRate(30);
}

// Movement and Rotation
function keyPressed() {
  if (keyCode === 32) {
    piece.rotate();
  }
  if (keyCode === LEFT_ARROW) {
    piece.dir = -1;
  }
  if (keyCode === RIGHT_ARROW) {
    piece.dir = 1;
  }
}

// TEST PROPOSE ONLY
function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}

function draw() {
  background(220);

  // Player controls
  controls();

  // help function to draw each component
  drawBoard();
  drawShape();
  // noLoop();
}

/////////////////////////////////////////////////////
/////                                           /////
/////           HELP FUNCTIONS BELLOW           /////
/////                                           /////
/////////////////////////////////////////////////////

function controls() {
  // Make pieces fall faster
  if (keyIsDown(DOWN_ARROW)) {
    maxTimer = 3;
  } else {
    maxTimer = 30;
  }
}

// Draw Falling Piece
function drawShape() {
  if (piece.dir != 0) {
    piece.update(gameBoard);
  }
  if (timer >= maxTimer) {
    piece.update(gameBoard);
    timer = 0;
  }
  piece.draw();

  timer += 1;
}

// Draw Tetris Board
function drawBoard() {
  // Draw the grey background first
  stroke(255, 255, 255, 10);
  fill(51);
  rect(0, 0, board.width, board.height);
  // get rows and columns count
  let cols = board.width / gridSize;
  let rows = board.height / gridSize;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      rect(c * gridSize, r * gridSize, gridSize);
    }
  }
  // then draw the pieces that landed already
  gameBoard.draw();
}