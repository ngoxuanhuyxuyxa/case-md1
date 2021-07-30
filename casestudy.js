var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var carImg = new Image();
var pointImg = new Image();
var backGround = new Image();
var bomImg = new Image();

carImg.src = "img/car.png";
pointImg.src = "img/point.png";
backGround.src = "img/background.png";
bomImg.src = "img/bom.png"

var score = 0;
var distance = 0;
var flag = true;
var car={
    x: 400,
    y: 600
}
var point=[];
point[0]= {
    x: Math.floor(Math.random()*600+200),
    y: 0
}
point[1]= {
    x: Math.floor(Math.random()*600+200),
    y: -300
}
point[2] = {
    x: Math.floor(Math.random()*600+200),
    y: -600
}
var bom=[];
bom[0] = {
    x: Math.floor(Math.random()*600+200),
    y: 0
}
bom[1] = {
    x: Math.floor(Math.random()*600+200),
    y: -300
}
bom[2] = {
    x: Math.floor(Math.random()*600+200),
    y: -600
}
function run() {
    if(flag==true){
        if(point[2].y<=800){
            check()
            context.drawImage(backGround, 0, 0);
            context.drawImage(carImg, car.x, car.y, 100, 200);
            for(i=0;i<point.length;i++){
                context.drawImage(pointImg, point[i].x, point[i].y, 20, 20);
            }
            for(i=0;i<point.length;i++){
                context.drawImage(bomImg, bom[i].x, bom[i].y, 20, 20);
            }

            for(i=0;i<point.length;i++){
                bom[i].y +=4;
            }
            for(i=0;i<point.length;i++){
                point[i].y += 3;
            }
            requestAnimationFrame(run)

        }else {
            check()
            for (i=0;i<point.length;i++){
                point[i].x = Math.floor(Math.random()*600+200)
                point[i].y = 0-distance;
                distance +=300;
            }
            if(distance>300*(point.length-1)){
                distance = 0;
            }
            bom[0].x = Math.floor(Math.random()*600+200);
            bom[0].y = 0;
            context.drawImage(backGround, 0, 0);
            context.drawImage(carImg, car.x, car.y, 100, 200);
            for(i=0;i<point.length;i++){
                context.drawImage(pointImg, point[i].x, point[i].y, 20, 20);
            }
            for(i=0;i<point.length;i++){
                context.drawImage(bomImg, bom[i].x, bom[i].y, 20, 20);
            }
            for(i=0;i<point.length;i++){
                bom[i].y +=4;
            }
            for(i=0;i<point.length;i++){
                point[i].y += 3;
            }
            requestAnimationFrame(run)
        }
    }else {
        alert("Bạn đã thua")
    }
}
run()

function rightArrowPressed() {
    car.x+= 10 ;
}
function leftArrowPressed() {
    car.x-= 10 ;
}
function sapcePressed() {
    for(i=0;i<point.length;i++){
        point[i].y +=12;
        bom[i].y +=12
    }
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 32:
            sapcePressed();
            break;
    }
}
document.addEventListener("keydown",moveSelection)
function check() {
    for(i=0;i<point.length;i++){
        if( point[i].x >= car.x && point[i].x <= (car.x+100) && point[i].y == car.y){
            score++;
            document.getElementById('score').innerHTML = "Điểm số của bạn là :  " + score;
        }
    }
    for(j=0;j<bom.length;j++){
        if( bom[j].x >= car.x && bom[j].x <= (car.x+100) && bom[j].y >= car.y && bom[j].y<(car.y + 200)){
            flag = false
        }
    }

}