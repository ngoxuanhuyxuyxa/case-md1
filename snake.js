class Snake {
    x;
    y;
    constructor() {
        this.x = 0;
        this.y = 0;
        this.grid = 20;
        this.dx = this.grid;
        this.dy = 0;
        this.cell = [];
        this.maxCells = 2;
    }
    update(){
        this.x += this.dx;
        this.y += this.dy;
        if(this.x >= canvas.width){
            this.x = 0;
        }
        else if(this.x < 0){
            this.x = canvas.width;
        }
        if (this.y >= canvas.height){
            this.y = 0;
        }
        else if(this.y < 0){
            this.y = canvas.height;
        }
        this.cell.unshift({x: this.x, y: this.y});
        if(this.cell.length > this.maxCells) {
            this.cell.pop();
        }
        this.bamnut()
    }
    ve(){
        for(let i = 0;i<this.cell.length;i++) {
            ctx.fillStyle = 'blue';
            ctx.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
        }
    }
    bamnut(){
        document.addEventListener('keydown',(e)=>{
            if( e.which == 37 && this.dx == 0){
                this.dx= -this.grid;
                this.dy = 0;
            }
            else if (e.which == 38 && this.dy==0){
                this.dx = 0;
                this.dy = -this.grid;
            }
            else if (e.which == 39 && this.dx==0){
                this.dx = this.grid;
                this.dy = 0;
            }
            else if (e.which == 40 && this.dy == 0){
                this.dx = 0;
                this.dy = this.grid;
            }
        })
    }


}