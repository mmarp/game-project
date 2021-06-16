class Flipping {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //this checks the absolute postion of the mouse cursor
    flipImage() {

        //First row
        if (this.y >= 60 && this.y <= 185) {

            if (this.x >= 670 && this.x <= 820) {
                this.flip(luis, luisPos);

            } else if (this.x >= 840 && this.x <= 990) {
                this.flip(stefano, stefanoPos);

            } else if (this.x >= 1010 && this.x <= 1160) {
                this.flip(danilo, daniloPos);

            } else if (this.x >= 1180 && this.x <= 1330) {
                this.flip(ben, benPos);
            }
        }
        //Second row
        if (this.y >= 215 && this.y <= 350) {

            if (this.x >= 670 && this.x <= 820) {
                this.flip(joaoF, joaoFPos);

            } else if (this.x >= 840 && this.x <= 990) {
                this.flip(tiagoP, tiagoPPos);

            } else if (this.x >= 1010 && this.x <= 1160) {
                this.flip(gigi, gigiPos);

            } else if (this.x >= 1180 && this.x <= 1330) {
                this.flip(joaoB, joaoBPos);
            }
        }
        //Third row
        if (this.y >= 430 && this.y <= 550) {

            if (this.x >= 670 && this.x <= 820) {
                this.flip(victor, victorPos);

            } else if (this.x >= 840 && this.x <= 990) {
                this.flip(tiagoS, tiagoSPos);

            } else if (this.x >= 1010 && this.x <= 1160) {
                this.flip(pedro, pedroPos);

            } else if (this.x >= 1180 && this.x <= 1330) {
                this.flip(beatriz, beatrizPos);
            }
        }
        //Forth row
        if (this.y >= 600 && this.y <= 730) {

            if (this.x >= 670 && this.x <= 820) {
                this.flip(margarida, margaridaPos);

            } else if (this.x >= 840 && this.x <= 990) {
                this.flip(helder, helderPos);

            } else if (this.x >= 1010 && this.x <= 1160) {
                this.flip(gabriel, gabrielPos);

            } else if (this.x >= 1180 && this.x <= 1330) {
                this.flip(miguel, miguelPos);
            }
        }


    }

    flip(person, characterPos) {

        //checks if it's the first image and starts the 
        //flipAnimation        
        if (person.isFirstImage) {

            this.flipAnimation(characterPos, 0, 1);
            person.isFirstImage = false;

        } else {
            //flipAnimation in reverse order
            this.flipAnimation(characterPos, 1, 0);
            person.isFirstImage = true;
        }
    }


    flipAnimation(character, firstImg, secondImg) {
        let initialX = character.x;
        let initialWidth = character.width;


        const firstImage = new Image();
        firstImage.src = character.character.image[firstImg];

        const secondImage = new Image();
        secondImage.src = character.character.image[secondImg];



        let interval = setInterval(() => {
            // this decides the speed of the flip
            initialWidth -= 32;
            initialX += 16;

            //this clears the image
            context.clearRect(character.x, character.y, character.width, character.height);

            //the first image shrinks until half point of the picture width
            if (initialX <= character.x + 75) {
                context.drawImage(firstImage, initialX, character.y, initialWidth, 150);
            }

            //the second picture grows until it reaches the full lenght of the width
            if (initialX > character.x + 75 && initialX <= character.x + 150) {
                context.drawImage(secondImage, initialX, character.y, initialWidth, 150);

            }

            //this makes it stop and terminates the animation but not
            //before it draws one last picture
            if (initialWidth <= -150) {

                context.drawImage(secondImage, character.x, character.y, 150, 150);
                clearInterval(interval);
            }


        }, 60);
    }



}

