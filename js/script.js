const board = document.getElementById("board");
const ctx = board.getContext("2d");

function drawRect(x, y, color) {
    var size = 20;
    var padding = 2;
    ctx.fillStyle = color;
    ctx.fillRect((size+padding)+x, (size+padding)*y, size, size);
}