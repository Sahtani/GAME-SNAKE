const board = document.getElementById("board");
const ctx = board.getContext("2d");

var rows = 20;
var cols = 20;
var blockSize = 25;

var gameOver = false;

var scoreText = document.getElementById("score");
var score = 0;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var foodX = blockSize * 10;
var foodY = blockSize * 10;

var velocityX = 0;
var velocityY = 0;

board.height = rows * blockSize;
board.width = cols * blockSize;

function update() {
    scoreText.innerHTML = score;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, board.width, board.height);

    ctx.fillStyle = "lime";
    ctx.fillRect(snakeX, snakeY, blockSize, blockSize);

    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;

    ctx.fillStyle = "red";
    ctx.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        placeFood();
        score += 1;
    }

    if (snakeX >= (blockSize * 20) || snakeY >= (blockSize * 20) || snakeX <= -blockSize || snakeY <= -blockSize) {
        gameOver = true;
        clearInterval(myInterval);
        document.querySelector(".gameOverScreen").style.display = "block";
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

function changeDirection(e) {
    if (!gameOver) {
        if (e.code == "ArrowUp") {
            velocityX = 0;
            velocityY = -1;
        } else if (e.code == "ArrowDown") {
            velocityX = 0;
            velocityY = 1;
        } else if (e.code == "ArrowLeft") {
            velocityX = -1;
            velocityY = 0;
        } else if (e.code == "ArrowRight") {
            velocityX = 1;
            velocityY = 0;
        }
    }
}

placeFood();
document.addEventListener("keyup", changeDirection);
const myInterval = setInterval(update, 100);