class Positioning{
    constructor(x, y, width, height, character){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.character = character;
    }
    draw(x) {
        const image = new Image();
        image.src = this.character.image[x];
        image.addEventListener('load', () => {
            context.drawImage(image, this.x, this.y, this.width, this.height);
        });

        

    }

    clear() {
        context.clearRect(this.x, this.y, this.width, this.height);
    }
    
}




const clearCanvas = {
    clear: function() {
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    } 
};





