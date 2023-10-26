const board = document.getElementById("board");
const ctx = board.getContext("2d");

var rows = 20;
var cols = 20;
var blockSize = 25;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

board.height = rows * blockSize;
board.width = cols * blockSize;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, board.width, board.height);

ctx.fillStyle = "lime";
ctx.fillRect(snakeX, snakeY, blockSize, blockSize);