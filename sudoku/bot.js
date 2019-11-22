"use strict";
//============================================ Initializating letiables
let $global_sudoku = [];
$global_sudoku.push([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]);
$global_sudoku.push([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]);
let $global_sudoku2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let empty = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let $global_animation = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let $global_animation2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let ran = [
  [2, 1, 0, 0, 8, 5, 3, 0, 0],
  [8, 0, 4, 3, 2, 9, 0, 0, 0],
  [3, 0, 0, 6, 0, 0, 0, 8, 2],

  [0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 0],

  [4, 5, 0, 0, 0, 3, 0, 0, 1],
  [0, 0, 0, 2, 9, 8, 5, 0, 3],
  [0, 0, 3, 5, 1, 0, 0, 6, 8]
];

let random3 = [
  [3, 0, 5, 8, 0, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 5, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 7, 0, 1, 0],
  [0, 0, 0, 0, 8, 0, 0, 0, 0],
  [0, 5, 0, 1, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 1, 8, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 9],
  [0, 0, 0, 0, 0, 4, 1, 0, 6]
];

let random1 = [
  [0, 9, 0, 5, 2, 0, 0, 7, 0],
  [0, 0, 7, 0, 9, 8, 0, 1, 0],
  [6, 0, 0, 1, 0, 0, 9, 0, 0],

  [7, 0, 0, 0, 0, 0, 3, 0, 0],
  [0, 8, 0, 0, 3, 0, 0, 4, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 7],

  [0, 0, 5, 0, 0, 1, 0, 0, 4],
  [0, 0, 0, 9, 8, 0, 7, 0, 0],
  [0, 3, 0, 0, 5, 4, 0, 2, 0]
];

let random2 = [
  [0, 0, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 4, 0],
  [0, 8, 0, 0, 9, 0, 0, 3, 0],

  [0, 0, 0, 4, 0, 0, 1, 9, 0],
  [0, 0, 0, 0, 8, 0, 0, 0, 0],
  [0, 4, 9, 0, 0, 5, 0, 0, 0],

  [0, 7, 0, 0, 3, 0, 0, 5, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 0, 0]
];

let simple_Sudoku = [
  [9, 0, 3, 0, 0, 0, 1, 0, 0],
  [0, 6, 0, 5, 1, 8, 0, 0, 0],
  [0, 1, 0, 0, 0, 3, 4, 2, 0],

  [0, 0, 0, 0, 4, 0, 5, 3, 0],
  [5, 3, 0, 0, 9, 0, 6, 4, 1],
  [1, 0, 6, 3, 0, 0, 0, 0, 7],

  [3, 0, 5, 0, 0, 0, 8, 0, 6],
  [0, 0, 0, 2, 0, 5, 0, 0, 0],
  [0, 0, 7, 6, 0, 0, 0, 5, 9]
];
let simple_Sudoku2 = [
  [9, 0, 3, 0, 0, 0, 1, 0, 0],
  [0, 6, 0, 5, 1, 8, 0, 0, 0],
  [0, 1, 0, 0, 0, 3, 4, 2, 0],

  [0, 0, 0, 0, 4, 0, 5, 3, 0],
  [5, 3, 0, 0, 9, 0, 6, 4, 1],
  [1, 0, 6, 3, 0, 0, 0, 0, 7],

  [3, 0, 5, 0, 0, 0, 8, 0, 6],
  [0, 0, 0, 2, 0, 5, 0, 0, 0],
  [0, 0, 7, 6, 0, 0, 0, 5, 9]
];

let $count = 0;
let $count2 = 0;
let $time = 0;
let $time2 = 0;
let $animation = [];
let $animation2 = [];

//============================================ Main function
// brute force the sudoku
function bruteForce(board) {
  let x_cord = 0;
  let y_cord = 0;
  let arr = [];
  let possibleEntries;
  // Base case
  if (isBoardFull(board)) {
    $global_sudoku[0] = board;
    return;
  } else {
    arr = nextEmptySpace(board);
    x_cord = arr[0];
    y_cord = arr[1];
    possibleEntries = getAllPossibleEntries(board, x_cord, y_cord);
    let ans = 0;
    for (let i = 0; i < 9; i++) {
      if (possibleEntries[i] != 0) {
        board[x_cord][y_cord] = possibleEntries[i];
        let temp = [x_cord, y_cord, possibleEntries[i]];
        $animation.push(temp);

        $count++;
        bruteForce(board);
        if (isBoardFull(board)) break;
      }
    }
    if (isBoardFull(board)) return;
    board[x_cord][y_cord] = 0;
  }
}
//============================================ Supporting functions
// next emptz space in board
function nextEmptySpace(board) {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == 0) {
        arr[0] = i;
        arr[1] = j;
        return arr;
      }
    }
  }
}

function CheckPre() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if ($global_sudoku[0][i][j] != 0) {
        if (corrupted(i, j, $global_sudoku[0][i][j])) {
          return false;
        }
      }
    }
  }
  return true;
}
//check is board is full- for breaking condiiton of the sudoku
// <--- board
// ----> true or flase
function isBoardFull(board) {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) if (board[i][j] == 0) return false;
  return true;
}
//return an array with all possible entries for a the position
// <--- board + x and y cordiante
// ----> all possible values
function getAllPossibleEntries(board, x, y) {
  let values = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let possibleEntries;
  for (let i = 0; i < 9; i++)
    if (board[i][y] != 0) {
      values[board[i][y] - 1] = 1;
    }
  for (let i = 0; i < 9; i++)
    if (board[x][i] != 0) {
      values[board[x][i] - 1] = 1;
    }
  let p = 0;
  let q = 0;
  if (x >= 0 && x <= 2) p = 0;
  else if (x >= 3 && x <= 5) p = 3;
  else p = 6;

  if (y >= 0 && y <= 2) q = 0;
  else if (y >= 3 && y <= 5) q = 3;
  else q = 6;
  for (let i = p; i < p + 3; i++)
    for (let j = q; j < q + 3; j++)
      if (board[i][j] != 0) values[board[i][j] - 1] = 1;

  for (let i = 0; i < 9; i++)
    if (values[i] == 0) values[i] = i + 1;
    else values[i] = 0;
  return values;
}

//============================================ Onclick events
// Start bruteforce onclick
function startbruteforce() {
  disableall();
  disableinput();
  let board = $global_sudoku[0];
  let board2 = $global_sudoku[1];
  if (CheckPre()) {
    document.getElementById("input").hidden = true;
    document.getElementById("info").hidden = true;
    document.getElementById("stats").hidden = false;
    document.getElementById("stats2").hidden = false;
    let start = new Date();

    bruteForce(board);
    let end = new Date();
    $time = end - start;
    solveSudoku(board2);

    startStats();
    startStats2();
    if ($count > 50000) {
      alert(
        "The rendering animation may take time. For a faster result plesae check the console :)"
      );
      console.log(
        "Thanks for visiting the console. Please find the answer below"
      );
      console.log($global_sudoku[0]);
    } else myFunction("May the force be with you", 3000);
    animate();
  } else {
    myFunction("Please check!!", 3000);
  }
}

// load an exisiting sudoku
function loadSudoku() {
  disableinput();
  drawcanvas();
  let custome;
  switch (Math.floor(Math.random() * 2 + 1)) {
    case 1:
      custome = simple_Sudoku;
      break;
    case 2:
      custome = ran;
      break;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      $global_sudoku[0][i][j] = custome[i][j];
      $global_sudoku[1][i][j] = custome[i][j];
    }
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if ($global_sudoku[0][i][j] != 0) {
        putfix($global_sudoku[0][i][j], i, j, 0, "d");
      }
    }
  }
}

//============================================ Display and animation

//draw the canvas
function drawcanvas() {
  let canvas = document.getElementById("sudoku");
  let ctx = canvas.getContext("2d");
  let canvas2 = document.getElementById("sudoku2");
  let ctx2 = canvas2.getContext("2d");
  let img = document.getElementById(0);
  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      ctx.drawImage(img, a * 60, b * 60, 60, 60);
      ctx2.drawImage(img, a * 60, b * 60, 60, 60);
    }
  }
}

// load the image
function loadimage() {
  drawcanvas();
}

//  draw in the canvas
function putfix(value, x, y, box, color) {
  let canvas = document.getElementById("sudoku");
  let ctx = canvas.getContext("2d");
  let canvas2 = document.getElementById("sudoku2");
  let ctx2 = canvas2.getContext("2d");
  let name = color + value;
  if (box != 0) {
    y = getY(box);
    x = getX(box, y);
    ctx.drawImage(img, y * 60, x * 60, 60, 60);
    ctx2.drawImage(img, y * 60, x * 60, 60, 60);
    return;
  }
  let img = document.getElementById(name);
  if (value != 0) ctx.drawImage(img, y * 60, x * 60, 60, 60);
  if (value != 0) ctx2.drawImage(img, y * 60, x * 60, 60, 60);
}

function syncBoard(x) {
  let id = x.id;
  id = id.replace("input_", "");
  globalchange(id, x.value);
}
function corrupted(x, y, val) {
  let board = $global_sudoku[0];
  let value = parseInt(val);
  for (let i = 0; i < 9; i++) {
    if (i == x) continue;
    if (board[i][y] == value) {
      badBlock(i, y, value);
    }
  }
  for (let i = 0; i < 9; i++) {
    if (i == y) continue;
    if (board[x][i] == value) {
      badBlock(x, i, value);
    }
  }
  let p = 0;
  let q = 0;
  if (x >= 0 && x <= 2) p = 0;
  else if (x >= 3 && x <= 5) p = 3;
  else p = 6;

  if (y >= 0 && y <= 2) q = 0;
  else if (y >= 3 && y <= 5) q = 3;
  else q = 6;
  for (let i = p; i < p + 3; i++)
    for (let j = q; j < q + 3; j++) {
      if (i != x && j != y) {
        if (board[i][j] == value) badBlock(i, j, value);
      }
    }
}
//============================================ Other random helping functions
function disableall() {
  document.getElementById("randombtn").disabled = true;
  document.getElementById("bruteforce").disabled = true;
}
function enableall() {
  document.getElementById("randombtn").disabled = false;
  document.getElementById("bruteforce").disabled = false;
}

function getlength(number) {
  return number.toString().length;
}

function startStats() {
  let canvas = document.getElementById("statistics");
  let ctx = canvas.getContext("2d");
  ctx.font = "20px Verdana";
  ctx.fillText("Total Moves= " + $count, 0, 100);
  if (getlength($time) <= 9) {
    ctx.fillText("Total Time= 0.00" + $time + " s", 0, 300);
  } else if (getlength($time) <= 99) {
    ctx.fillText("Total Time= 0.0" + $time + " s", 0, 300);
  } else if (getlength($time) <= 999) {
    ctx.fillText("Total Time= 0." + $time + " s", 0, 300);
  } else if (getlength($time) <= 9999) {
    ctx.fillText("Total Time= " + $time + " ms", 0, 300);
  }
}

function startStats2() {
  let canvas = document.getElementById("statistics2");
  let ctx = canvas.getContext("2d");
  ctx.font = "20px Verdana";
  ctx.fillText("Total Moves= " + $count2, 0, 100);
  if (getlength($time2) <= 9) {
    ctx.fillText("Total Time= 0.00" + $time2 + " s", 0, 300);
  } else if (getlength($time2) <= 99) {
    ctx.fillText("Total Time= 0.0" + $time2 + " s", 0, 300);
  } else if (getlength($time2) <= 999) {
    ctx.fillText("Total Time= 0." + $time2 + " s", 0, 300);
  } else if (getlength($time2) <= 9999) {
    ctx.fillText("Total Time= " + $time2 + " ms", 0, 300);
  }
}
function badBlock(x, y, value) {
  drawimage(value, x, y, 0, "r");
}

function CanPut(xa) {
  let value = xa.value;
  let str = xa.id;
  let id = str.replace("input_", "");
  let y = getY(id);
  let x = getX(id, y);
  let possibleEntries = getAllPossibleEntries(board, x, y);
  let answer = false;
  for (let i = 0; i < 9; i++) {
    if (value == possibleEntries[i]) {
      answer = true;
      break;
    }
  }
  return answer;
}

let $current = 1;
let $current2 = 1;
function animate() {
  let arr;
  arr = $animation.shift();
  let arr2 = $animation2.shift();
  if (arr && arr2) {
    $global_animation[arr[0]][arr[1]] = arr[2];
    rendersmartimage(arr[0], arr[1], arr[2]);
    rendercount($current++);
    $global_animation2[arr2[0]][arr2[1]] = arr2[2];
    rendersmartimage2(arr2[0], arr2[1], arr2[2]);
    rendercount2($current2++);
    setInterval(animate, 1);
  } else if (arr) {
    $global_animation[arr[0]][arr[1]] = arr[2];
    rendersmartimage(arr[0], arr[1], arr[2]);
    rendercount($current++);
    setInterval(animate, 1);
  } else if (arr2) {
    $global_animation2[arr2[0]][arr2[1]] = arr2[2];
    rendersmartimage2(arr2[0], arr2[1], arr2[2]);
    rendercount2($current2++);
    setInterval(animate, 1);
  }
}

function rendercount(current) {
  let canvas = document.getElementById("statistics");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 150, 1000, 50);
  ctx.fillText("Current Move= " + current, 0, 200);
}
function rendercount2(current) {
  let canvas = document.getElementById("statistics2");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 150, 1000, 50);
  ctx.fillText("Current Move= " + current, 0, 200);
}

function rendersmartimage(x, y, value) {
  let boxcount = 0;
  let boxnumber = x * 9 + y + 1;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      boxcount++;
      if (i == x && j == y) {
        drawimage(value, i, j, 0, "r");
        continue;
      }
      if (boxcount < boxnumber) {
        if ($global_animation[i][j] != 0)
          drawimage($global_animation[i][j], i, j, 0, "");
        continue;
      }
      if ($global_animation[i][j] != 0) drawimage(0, i, j, 0, "");
    }
  }
}
function rendersmartimage2(x, y, value) {
  let boxcount = 0;
  let boxnumber = x * 9 + y + 1;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      boxcount++;
      if (i == x && j == y) {
        drawimage2(value, i, j, 0, "");
        continue;
      }
    }
  }
}
function drawimage(value, x, y, box, color) {
  let canvas = document.getElementById("sudoku");
  let ctx = canvas.getContext("2d");
  let name = color + value;

  let img = document.getElementById(name);
  //alert(img);
  if (img == null) {
    img = document.getElementById(0);
  }
  ctx.drawImage(img, y * 60, x * 60, 60, 60);
}
function drawimage2(value, x, y, box, color) {
  let canvas2 = document.getElementById("sudoku2");
  let ctx2 = canvas2.getContext("2d");
  let name = color + value;

  let img = document.getElementById(name);
  //alert(img);
  if (img == null) {
    img = document.getElementById(0);
  }
  ctx2.drawImage(img, y * 60, x * 60, 60, 60);
}

function getinput() {
  let newval = document.getElementById("input").innerHTML;
  let count = 0;
  for (let i = 1; i < 82; i++) {
    newval +=
      "<input id='input_" +
      i +
      "' type='text' size='1' onkeyup='validate(this);'  onchange='syncBoard(this);CheckPre();' >";
    if (i % 3 == 0) {
      newval += "<img src='img/space.png'  height='10' width='5'>";
    }
    if (i % 9 == 0) {
      newval += "<br>";
      count++;
    }
    if (count == 3) {
      newval += "<br>";
      count = 0;
    }
  }
  document.getElementById("input").innerHTML = newval;
}
function validate(x) {
  let allowed = [1, 2, 3, 4, 5, 6, 7, 8, 9, ""];
  for (let i = 0; i < 10; i++)
    if (allowed[i] == x.value) {
      return true;
    }
  x.value = "";
  toast("Sorry! " + x.value + " Not allowed");
  return false;
}

function globalchange(id, value) {
  let y = getY(id);
  let x = getX(id, y);
  if (value == "") value = 0;
  $global_sudoku[0][x][y] = value;
  $global_sudoku[1][x][y] = value;
  drawimage(value, x, y, 0, "d");
  drawimage2(value, x, y, 0, "d");
}

function toast(message) {
  alert(message);
}
function getY(box) {
  return (box - 1) % 9;
}
function getX(box, y) {
  return (box - 1 - y) / 9;
}
function disableinput() {
  for (let i = 1; i < 82; i++)
    document.getElementById("input_" + i).disabled = true;
}

function myFunction(message, time) {
  let x = document.getElementById("snackbar");
  document.getElementById("toast").innerHTML = message;
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, time);
}

const solveSudoku = board => {
  let keepGoing = true;
  let start = new Date();
  while (keepGoing) {
    keepGoing = false;
    let map = emptySpotsWithPossibleValues(board);
    // naked simgles
    map.forEach((entries, key) => {
      if (entries.length === 1) {
        board[key[0]][key[1]] = entries;
        let temp = [key[0], key[1], entries[0]];
        // console.log(temp);
        $count2++;
        $animation2.push(temp);
        keepGoing = true;
      }
      // hidden singles
    });
  }
  let end = new Date();
  $time2 = end - start;
  for (let val of $animation2) {
    console.log(val);
  }
  console.log(board);
  // find empty spots

  // make a map fpr every position with all possible values

  //if hashmap.length === 1 then add the value
};

// get all empty spots for a sudoku
const emptySpotsWithPossibleValues = board => {
  let map = new Map();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == 0) {
        let entries = removeZeros(getAllPossibleEntries(board, i, j));
        map.set([i, j], entries);
      }
    }
  }
  return map;
};

const removeZeros = arr => {
  return arr.filter(val => val != 0);
};

const getBoxStart = arr => {
  let startIndex = [];
  if (arr[i] < 3) {
    startIndex.push(0);
  } else if (arr[i] < 6) {
    startIndex.push(3);
  } else if (arr[i] < 9) {
    startIndex.push(6);
  }
  if (arr[j] < 3) {
    startIndex.push(0);
  } else if (arr[j] < 6) {
    startIndex.push(3);
  } else if (arr[j] < 9) {
    startIndex.push(6);
  }
  return startIndex;
};
