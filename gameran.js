let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext('2d')
let snake = new Snake();
let food = new Food();
let intervalid;
let score = 0;
snake.ve();
function startgame() {
    intervalid = setInterval(run,100)
}
function stopgame() {
    clearInterval(intervalid);
}
function resetgame() {
   location.reload();
}
function run() {
    ctx.clearRect(0, 0, 800, 500);
    snake.update();
    snake.ve();
    if (snake.x == food.x && snake.y == food.y) {
        food.randomfood();
        snake.maxCells++;
        score++;
        document.getElementById("hiendiem").innerHTML= "score:" + score;
    }
    food.vefood();
    for (let i = 3; i < snake.cell.length; i++) {
        if (snake.x == snake.cell[i].x && snake.y == snake.cell[i].y) {
            resetgame();
            alert('gameover ' + " \n diem cua ban la" + score);
            clearInterval(intervalid);
        }
    }
}


