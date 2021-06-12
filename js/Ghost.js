
class Ghost {
    constructor(x, y){
        this.x = x;
        this.y = y;

        const image = new Image ();
        image.src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c316.png";
        image.onload = () => { //needs to be arrow function because of the scope. if it was function() it couldn't access the this.
            this.image = image;
            this.draw();
        };
    }
    draw() {
        context.drawImage(this.image, this.x, this.y, 50, 50);
    }

    moveUp(){
        this.y -= 25;
    }
    moveDown(){
        this.y += 25;
    }
    moveLeft(){
        this.x -= 25;
    }
    moveRight(){
        this.x += 25;
    }
}