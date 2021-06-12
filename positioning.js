class Positioning{
    constructor(x, y, width, height, character){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.character = character;
    }
    draw() {
        const image = new Image();
        image.src = './Images/m.jpg';
        context.drawImage(image, this.x, this.y, this.width, this.height);

    }
}