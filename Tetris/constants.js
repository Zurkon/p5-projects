const gridSize = 20;
const board = {
  width: 200,
  height: 400
}

const darkColor = {
  r: 51,
  g: 51,
  b: 51
}

const purpleColor = {
  r: 175,
  g: 100,
  b: 220
};
const greenColor = {
  r: 100,
  g: 240,
  b: 100
};
const yellowColor = {
  r: 255,
  g: 225,
  b: 0
};
const blueColor = {
  r: 100,
  g: 100,
  b: 255
};
const redColor = {
  r: 255,
  g: 50,
  b: 50
}

const colors = [darkColor, purpleColor, greenColor, yellowColor, blueColor, redColor];

const piece_S = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 1, 0]
];

const piece_Z = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 1, 1]
];

const piece_L = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 1, 0]
];

const piece_J = [
  [0, 0, 1],
  [0, 0, 1],
  [0, 1, 1]
];

const piece_T = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0]
];

const piece_O = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
];

const piece_I = [
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0]
];

const pieces = [ piece_S, piece_L, piece_O, piece_J, piece_Z, piece_T, piece_I ];

// copy a 2D array by value because 
// Javascript just copy multi-dimensional array by reference...
function deepCopy(arr) {
  let temp = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      temp.push(deepCopy(item));
    } else {
      temp.push(item);
    }
  })
  return temp;
}

let testBoard = [[0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,2],
                 [0,3,0,0,0,0,4,4,0,2],
                 [3,3,3,0,0,0,4,4,2,2]]