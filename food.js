class Food {
    x;
    y;
    constructor() {
        this.x = 0;
        this.y = 0;
        this.grid = 20;
        this.randomfood()
    }
    randomfood(){
        this.x = (Math.floor(Math.random()*(39 - 0))*this.grid);
        this.y = (Math.floor(Math.random()*(25 - 0))*this.grid);
    }
    vefood(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y,20, 20);
    }
}