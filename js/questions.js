//Questions

let count = 1;





function render() {
    let container = document.getElementById('questions');

    container.innerHTML = `<img class="questions-img" src="./Images/questions/question${count}.jpg">`;
}

let prev = document.getElementById('prev-button');
let next = document.getElementById('next-button');

prev.onclick = function () {
    if (count > 1) {
        count = count - 1;
        render();
      
    }

};



next.onclick = function () {
    if (count < 7) {
        count = count + 1;
        render();
    }

};

render();




//question-match

const askButton = document.getElementById("ask-button");
askButton.disabled = false;


askButton.onclick = () => {
    let yesNo = document.querySelector('.yes-no');
    const span = document.createElement('span');

    



    console.log(yesNo);
    if(currentGame.attempts > 0){
        if (questionMatch(count)) {
            span.innerText = 'YES';
            yesNo.appendChild(span);
            currentGame.attempts--;
    
        } else {
            span.innerText = 'NO';
            yesNo.appendChild(span);
            currentGame.attempts--;
        }

    
    console.log(currentGame.attempts);

    }
    

    setTimeout(() => {
        span.remove();
        askButton.disabled = false;
    }, 3000);
    setTimeout(() => askButton.disabled = true, 1); //disabled button

    numberOfAttempts();

};


function questionMatch(number) {
    switch (number) {

        case 1:
            return chosenCharacter.gender === 'male';

        case 2:
            return chosenCharacter.hairType === 'wavy';

        case 3:
            return chosenCharacter.hairColor === 'black';

        case 4:
            return chosenCharacter.hairColor === 'blonde';

        case 5:
            return chosenCharacter.eyeColor === 'brown';

        case 6:
            return chosenCharacter.eyeWare === true;

        case 7:
            return chosenCharacter.facialHair === true;


    }
}


const attemptEmpty1 = document.getElementById('attempt-empty-1');
const attemptEmpty2 = document.getElementById('attempt-empty-2');
const attemptEmpty3 = document.getElementById('attempt-empty-3');



//Attempts
function numberOfAttempts() {
    let attempts = document.getElementById('attempts');
    const span = document.createElement('span');

    if(currentGame.attempts >= 0){
        console.log("mine "+ currentGame.attempts);

        if(currentGame.attempts === 2){
            attemptEmpty3.style.display = 'none';
            span.innerText = '◉';
            attempts.prepend(span);
    
        } else if(currentGame.attempts === 1){
            attemptEmpty2.style.display= 'none';
            span.innerText = '◉';
            attempts.prepend(span);
        } else if(currentGame.attempts === 0) {
            attemptEmpty1.style.display= 'none';
            span.innerText = '◉';
            currentGame.attempts--;
            attempts.prepend(span);
        }
    }

}





