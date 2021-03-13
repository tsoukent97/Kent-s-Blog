document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);

// Define your `board` object here!
//  var board = {
//    cells: [
//   {
//     row: 0,
//     col: 0,
//     isMine: true,
//     hidden: true,
//     isMarked: false,
//     surroundingMines: 0,
//   },
//   {
//     row: 0,
//     col: 1,
//     isMine: false,
//     hidden: true,
//     isMarked: false,
//     surroundingMines: 0,
//   },
//   {
//     row: 1,
//     col: 0,
//     isMine: true,
//     hidden: true,
//     isMarked: false,
//     surroundingMines: 0,
//   },
//   {
//     row: 1,
//     col: 1,
//     isMine: false,
//     hidden: true,
//     isMarked: false,
//     surroundingMines: 0,
//   }
// ]
//  }
var board = { cells:[]};
var size = 6;

function createBoard() {
  for (row = 0; row < size; row++) {
    for (col = 0; col < size; col++) {
      board.cells.push({
        row: row,
        col: col,
        isMine: Math.random() >= 0.8,
        hidden: true,
      })
    }
  }

}
createBoard()


function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  
  for (var i = 0; i < board.cells.length; i++) {
  var cell = board.cells[i]
  cell.surroundingMines = countSurroundingMines(cell)
}
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var didWin = true 
 
  for (var i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i]
     if (cell.hidden && !cell.isMine) {
    didWin = false;
  }
}

  if (didWin) {
    lib.displayMessage('You win!')
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  // we take in the cell argument 
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  
  for (var i = 0; i < surrounding.length; i++) {
    var surroundingCell = surrounding[i]
  if (surroundingCell.isMine) {
    count++
  }
}
return count
  // count how many of the surrounding cells are mines 
  // return the count of how many are mines 
}

function restart() {
  window.location.reload()
}