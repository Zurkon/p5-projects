let snake;
let gridSize = 30;
let food;

function setup() {
  createCanvas(420, 420);
  // set a FrameRate
  frameRate(10);
  // Instantiate a Snake object
  snake = new Snake(0, 0, gridSize);
  // create a Food
  pickLocation();
}

function draw() {
  background(50);

  drawBoard();

  // if snake collide with food
  if (snake.collide(food)) {
    snake.grow();
    pickLocation();
  }

  // Check if snake collides with itself
  snake.death();

  // Snake Draw
  snake.move();
  snake.show();

  // Food Draw
  fill(255, 0, 0);
  rect(food.x, food.y, gridSize);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode == DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode == RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode == LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}

function pickLocation() {
  let cols = floor(width / gridSize);
  let rows = floor(height / gridSize);
  food = createVector(floor(random(cols)), floor(random(rows)));
  // mult() will multiply x and y by gridSize
  food.mult(gridSize);
}

function drawBoard() {
  let cols = floor(width / gridSize);
  let rows = floor(height / gridSize);
  stroke(255, 255, 255, 10);
  noFill();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      rect(i * gridSize, j * gridSize, gridSize);
    }
  }
}