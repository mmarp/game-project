const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//Write a function_ on click, show game board





const charactersArray = [luis, stefano, danilo, ben, joaoF, tiagoP,
 gigi, joaoB, victor, tiagoS, pedro, beatriz, margarida, helder, gabriel, miguel];


 function pickMysteryCharacter(){
    let mysteryCharacter = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    return mysteryCharacter;
 }














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


const chosenCharacter = pickMysteryCharacter();

document.getElementById("start-button").onclick = () => {
  document.getElementById('game-board').style.display = 'block';//display: block = when clicking shows the road
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('ask-button').style.display = 'block';
//   document.getElementById('prev-button').style.display = 'block';
  document.getElementById('questions').style.display = 'block';
//   document.getElementById('next-button').style.display = 'block';
  document.getElementById('div-f-answer').style.display = 'block';
  document.getElementById('f-prev-button').style.display = 'block';
  document.getElementById('f-answer').style.display = 'block';
  document.getElementById('f-next-button').style.display = 'block';

  
  
//Flipping cards

addEventListener('click', (e) => {
    const flip = new Flipping(e.x, e.y);
    flip.flipImage();
});




  console.log(chosenCharacter);
};




//Questions
// let questions = 1;

// document.getElementById('next-button').onclick = () => {
//     if(questions < 3){
//         questions++;
//         console.log(questions);
//     } else {
//         document.getElementById('next-button').disabled = true;
//     }
    
// };


// document.getElementById('prev-button').onclick = () => {
//     if(questions > 1){
//         questions--;
//         console.log(questions);
//     } else {
//         document.getElementById('prev-button').disabled = true;
//     }
    
// };




//Questions

let count = 1;





function render(){
    let container = document.getElementById('questions');

    container.innerHTML = `<img class="questions-img" src="./Images/questions/question${count}.jpg">`;
}

let prev = document.getElementById('prev-button');
let next = document.getElementById('next-button');

prev.onclick = function(){
    if(count > 1){
        count = count -1;
        render();
    }
    
};

next.onclick = function(){
    if(count < 7){
    count = count +1;
    render();

    }
    
};

render();


//Final answer images

let pick = 12;





function renderPick(){
    let containerPick = document.getElementById('f-answer');

    containerPick.innerHTML = `<img class="f-answer-img" src="./Images/pick/pick12.jpg">`;
}


let fPrev = document.getElementById('f-prev-button');
let fNext = document.getElementById('f-next-button');

fPrev.onclick = function(){
    if(pick > 1){
        pick = pick -1;
        render();
    }
    
};

fNext.onclick = function(){
    if(pick < 16){
    pick = pick +1;
    renderPick();

    }
    
};

renderPick();











//question-match

const askButton = document.getElementById("ask-button");
askButton.disabled = false;


askButton.onclick = () => {
    let yesNo = document.querySelector('.yes-no');
    const span = document.createElement('span');
    

    console.log(yesNo);
    if(questionMatch(count)){
        span.innerText = 'YES';
        yesNo.appendChild(span);
       
    } else {
        span.innerText = 'NO';
        yesNo.appendChild(span);
    }

    setTimeout( () => {
        span.remove();
        askButton.disabled = false;
    }, 3000);
    setTimeout( () => askButton.disabled = true, 1);//disabled button
        

};


function questionMatch(number){
    switch(number){
        
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





//Pick-img-match

let pickImg = document.querySelectorAll('.f-answer-img');

addEventListener('click', (e) => {
    console.log(e.isTrusted);
    
    if(e.isTrusted === true){
    document.getElementById('sure').style.display = 'block';
    
 }
    
});



// pickImg.onclick = () => {
//     document.getElementById('sure').style.display = 'block';

// };













