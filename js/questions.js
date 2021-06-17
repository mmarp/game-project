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
    buttonClick.play();
    let yesNo = document.querySelector('.yes-no');
    const span = document.createElement('span');
    
    if (currentGame.attempts > 0) {
        if (questionMatch(count)) {
            span.innerText = 'YES';
            yesNo.appendChild(span);
            currentGame.attempts--;
            currentGame.score -= 3;

        } else {
            span.innerText = 'NO';
            yesNo.appendChild(span);
            currentGame.attempts--;
            currentGame.score -= 3;
        }
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
            autoFilter("gender");
            return chosenCharacter.gender === 'male';

        case 2:
            autoFilter("hairType");
            return chosenCharacter.hairType === 'wavy';

        case 3:
            autoFilter("hairColor");
            return chosenCharacter.hairColor === 'black';

        case 4:
            autoFilter("hairColor");
            return chosenCharacter.hairColor === 'blonde';

        case 5:
            autoFilter("eyeColor");
            return chosenCharacter.eyeColor === 'brown';

        case 6:
            autoFilter("eyeWare");
            return chosenCharacter.eyeWare === true;

        case 7:
            autoFilter("facialHair");
            return chosenCharacter.facialHair === true;
    }
}

//this automatically flips the characters that don't match the answers
function autoFilter(type) {
    if (currentGame.isEasyMode) {
        characterPosArray
            .filter(char => char.character[type] !== chosenCharacter[type])
            .filter(char => char.isAlreadyOut === false)
            .forEach(person => {
                
                person.isAlreadyOut = true;
                automaticFlip.flipAnimation(person, 0, 1);
            });
    }
}


const attemptEmpty1 = document.getElementById('attempt-empty-1');
const attemptEmpty2 = document.getElementById('attempt-empty-2');
const attemptEmpty3 = document.getElementById('attempt-empty-3');

//Attempts
function numberOfAttempts() {
    let attempts = document.getElementById('attempts');
    const span = document.createElement('span');

    if (currentGame.attempts >= 0) {

        if (currentGame.attempts === 2) {
            attemptEmpty3.style.display = 'none';
            span.innerText = '◉';
            attempts.prepend(span);

        } else if (currentGame.attempts === 1) {
            attemptEmpty2.style.display = 'none';
            span.innerText = '◉';
            attempts.prepend(span);
        } else if (currentGame.attempts === 0) {
            attemptEmpty1.style.display = 'none';
            span.innerText = '◉';
            currentGame.attempts--;
            attempts.prepend(span);
        }
    }
}





