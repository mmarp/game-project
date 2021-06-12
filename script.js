const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//write a function_ on click, show game board

// const pedro = new Character('./Images/m.jpg', 'male', 'wavy', 'brown', true, 'brown', false, false);

// const pedroPos = new Positioning(50, 50, 50, 50, pedro);

// pedroPos.draw();


const image = new Image();
image.src = "./Images/m.jpg";
context.drawImage(image, 100, 100, 50, 50);
