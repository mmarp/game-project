class Flipping {

    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

    flipImage() {
        if ((this.x >= 690 && this.x <= 800) && (this.y >= 100 && this.y <= 230)) {
            console.log("inside");
            luisPos.clear();

            if (luis.isFirstImage) {
                setTimeout(() => luisPos.draw(1), 20);
                luis.isFirstImage = false;

            } else {
                setTimeout(() => luisPos.draw(0), 20);
                luis.isFirstImage = true;
            }

        } else {
            console.log("outside");
        }
    }

}
