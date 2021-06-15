const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//Write a function_ on click, show game board








function pickMysteryCharacter() {
    let mysteryCharacter = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    return mysteryCharacter;
}


//Declaring variables from html



//When clicking start:

document.getElementById('game-board').style.display = 'none'; //display: none = doesn't show the road

// document.getElementById('prev-button').style.display = 'none';
document.getElementById('questions').style.display = 'none';
// document.getElementById('next-button').style.display = 'none';


document.getElementById('div-f-answer').style.display = 'none';

document.getElementById('f-prev-button').style.display = 'none';
document.getElementById('f-answer').style.display = 'none';
document.getElementById('f-next-button').style.display = 'none';

document.getElementById('sure').style.display = 'none';

document.getElementById('attempts-empty').style.display = 'none';


// document.getElementById('attempts-full').style.display = 'none';






let chosenCharacter;






document.getElementById("start-button").onclick = () => {

    document.getElementById('game-board').style.display = 'block'; //display: block = when clicking shows the road
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('ask-button').style.display = 'block';
    //   document.getElementById('prev-button').style.display = 'block';
    document.getElementById('questions').style.display = 'block';
    //   document.getElementById('next-button').style.display = 'block';
    document.getElementById('div-f-answer').style.display = 'block';
    document.getElementById('f-prev-button').style.display = 'block';
    document.getElementById('f-answer').style.display = 'block';
    document.getElementById('f-next-button').style.display = 'block';

    document.getElementById('attempts-empty').style.display = 'block';
    
    startGame();
    
    



    //Flipping cards

    addEventListener('click', (e) => {
        const flip = new Flipping(e.x, e.y);
        flip.flipImage();
    });



    addCharacterEvent();


    console.log(chosenCharacter);
};


let currentGame;

function startGame(){
currentGame = new Game();
chosenCharacter = pickMysteryCharacter();

}










function addCharacterEvent() {
    //Pick-img-match
    const pickImg = document.querySelector('.f-answer-img');
    pickImg.addEventListener('click', (e) => {
        console.log(e.isTrusted);
        if (e.isTrusted === true) {
            document.getElementById('sure').style.display = 'block';
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
    const chosenPos = new Positioning(500, 255, 200, 200, chosenCharacter);
    clearCanvas.clear();
    document.getElementById('ask-button').style.display = 'none';
    document.getElementById('try-again').style.display = 'block';

    document.getElementById('div-f-answer').style.display = 'none';
    document.getElementById('sure').style.display = 'none';
    document.getElementById('attempts').style.display = 'none';
    document.getElementById('questions').style.display = 'none';

    document.getElementById('bonus').style.display = 'block';

    
    




    if (pick === chosenCharacter.id) {
        console.log('correct');
        chosenPos.draw(3);
       
        if(currentGame.attempts === 3){
            context.font = "100px Arial";
            context.strokeStyle = "blue";
            context.lineWidth = 1; 
            context.strokeText('🥇', 550, 600);            
        } else if(currentGame.attempts === 2){
            context.font = "100px Arial";
            context.strokeStyle = "blue";
            context.lineWidth = 1; 
            context.strokeText('🥈', 550, 600);
        } else if(currentGame.attempts === 1){
            context.font = "100px Arial";
            context.strokeStyle = "blue";
            context.lineWidth = 1; 
            context.strokeText('🥉', 550, 600);
        } else if(currentGame.attempts === 0){
            context.font = "100px Arial";
            context.strokeStyle = "blue";
            context.lineWidth = 1; 
            context.strokeText('🎖', 550, 600);
        }

    } else {
        console.log('incorrect');
        chosenPos.draw(4);
        context.font = "20px Arial";
            context.strokeStyle = "blue";
            context.lineWidth = 1; 
            context.strokeText('Maybe next time!', 550, 600);
            
            
            
    }

};

notSureButton.onclick = () => {
    document.getElementById('sure').style.display = 'none';
};



//Try again

const tryAgainButton = document.getElementById('try-again');

tryAgainButton.onclick = () => {
window.location.reload(false);
};


