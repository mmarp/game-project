const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//Write a function_ on click, show game board








function pickMysteryCharacter() {
    let mysteryCharacter = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    return mysteryCharacter;
}


//Declaring variables from html



//When clicking start:

// document.getElementById('game-board').style.display = 'none'; //display: none = doesn't show the road

// document.getElementById('prev-button').style.display = 'none';
// document.getElementById('questions').style.display = 'none';
// document.getElementById('next-button').style.display = 'none';


// document.getElementById('div-f-answer').style.display = 'none';

// document.getElementById('f-prev-button').style.display = 'none';
// document.getElementById('f-answer').style.display = 'none';
// document.getElementById('f-next-button').style.display = 'none';

document.getElementById('sure').style.display = 'none';

// document.getElementById('attempts-empty').style.display = 'none';


// document.getElementById('attempts-full').style.display = 'none';



//Global variables:
const buttonClick = new Audio('./sounds/button_click.mp3');
let chosenCharacter;
let currentGame;
let automaticFlip;

//When clicking start:
function display(){
    document.getElementById('game-board').style.display = 'block'; //display: block = when clicking shows the road
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('easy-start-button').style.display = 'none';
    document.getElementById('ask-button').style.display = 'block';
    
    document.getElementById('questions').style.display = 'block';
    
    document.getElementById('div-f-answer').style.display = 'block';
    document.getElementById('f-prev-button').style.display = 'block';
    document.getElementById('f-answer').style.display = 'block';
    document.getElementById('f-next-button').style.display = 'block';

    document.getElementById('attempts-empty').style.display = 'block';

}


function displayInstructions(){
    document.getElementById('container-game').style.display = 'none';
    document.getElementById('overlay-instructions-1').style.display = 'block';
}






document.getElementById("start-button").onclick = () => {

    buttonClick.play();
    displayInstructions();
    startGame();
    addCharacterEvent();

    console.log(chosenCharacter);
};



document.getElementById("easy-start-button").onclick = () => {
    buttonClick.play();
    displayInstructions();
    startEasyGame();
    addCharacterEvent();

    console.log(chosenCharacter);
};




function startGame(){
currentGame = new Game();
chosenCharacter = pickMysteryCharacter();
//Flipping cards
addEventListener('click', (e) => {
    const flip = new Flipping(e.x, e.y);
    flip.flipImage();
});

}

function startEasyGame(){
currentGame = new Game();
chosenCharacter = pickMysteryCharacter();
currentGame.isEasyMode = true;
automaticFlip = new Flipping(0,0);
}






//Disappearing instructions

document.getElementById('overlay-instructions-1').onclick = () => {
    document.getElementById('overlay-instructions-1').style.display = 'none';
    document.getElementById('overlay-instructions-2').style.display = 'block';
};

document.getElementById('overlay-instructions-2').onclick = () => {
    document.getElementById('overlay-instructions-2').style.display = 'none';
    document.getElementById('overlay-instructions-3').style.display = 'block';
};

document.getElementById('overlay-instructions-3').onclick = () => {
    document.getElementById('overlay-instructions-3').style.display = 'none';
    document.getElementById('overlay-instructions-4').style.display = 'block';
};

document.getElementById('overlay-instructions-4').onclick = () => {
    document.getElementById('overlay-instructions-4').style.display = 'none';
    document.getElementById('overlay-instructions-5').style.display = 'block';
};

document.getElementById('overlay-instructions-5').onclick = () => {
    document.getElementById('overlay-instructions-5').style.display = 'none';
    document.getElementById('container-game').style.display = 'block';
    display();
};

function addCharacterEvent() {
    //Pick-img-match
    const pickImg = document.querySelector('.f-answer-img');
    pickImg.addEventListener('click', (e) => {
        buttonClick.play();
        console.log(e.isTrusted);
        if (e.isTrusted === true) {
            document.getElementById('sure').style.display = 'block';
            document.getElementById('div-f-answer').style.display = 'none';
        }
    });
}

//Checking if pick equals chosen
//NOT WORKING YET
//needs to appear again after disappearing
//is not turning out correct!

const sureButton = document.getElementById('sure-button');
const notSureButton = document.getElementById('not-sure-button');
const gameBoard = document.getElementById('game-board');


sureButton.onclick = () => {

    const chosenPos = new Positioning(450, 205, 300, 300, chosenCharacter);
    clearCanvas.clear();

    document.getElementById('ask-button').style.display = 'none';
    document.getElementById('try-again').style.display = 'block';
    document.getElementById('div-f-answer').style.display = 'none';
    document.getElementById('sure').style.display = 'none';
    document.getElementById('attempts').style.display = 'none';
    document.getElementById('questions').style.display = 'none';
    // document.getElementById('bonus').style.display = 'block';
    

    if (pick === chosenCharacter.id) {
        console.log('correct');
        chosenPos.draw(3);
       
        if(currentGame.attempts === 3){
        
            document.getElementById('prize1').style.display = 'block';            
        } else if(currentGame.attempts === 2){
            document.getElementById('prize2').style.display = 'block'; 
        } else if(currentGame.attempts === 1){
            document.getElementById('prize3').style.display = 'block'; 
        } else {
            document.getElementById('prize4').style.display = 'block'; 
            
        } 
        
        
        gameBoard.style.backgroundImage = 'url(./Images/win.gif)';
        gameBoard.style.backgroundSize = 'auto';
        new Audio('./sounds/winning_game.mp3').play();

    } else {
        console.log('incorrect');
        chosenPos.draw(4);
        
        gameBoard.style.backgroundImage = 'url(./Images/lost.gif)';
        gameBoard.style.backgroundSize = '1200px 800px';
        new Audio('./sounds/losing_game.mp3').play();
        document.getElementById('game-over').style.display = 'block';

    }

};

notSureButton.onclick = () => {
    buttonClick.play();
    document.getElementById('sure').style.display = 'none';
    document.getElementById('div-f-answer').style.display = 'block';
};



//Try again

const tryAgainButton = document.getElementById('try-again');

tryAgainButton.onclick = () => {
window.location.reload(false);
};


