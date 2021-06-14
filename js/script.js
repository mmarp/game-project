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
let questions = 1;




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
    if(count < 4){
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



document.getElementById("ask-button").onclick = () => {
    let yesNo = document.querySelector('.yes-no');
    const span = document.createElement('span');
    

    console.log(yesNo);
    if(questionMatch(questions)){
        span.innerText = 'YES';
        yesNo.appendChild(span);
       
    } else {
        span.innerText = 'NO';
        yesNo.appendChild(span);
    }

    setTimeout( () => span.remove(), 2000);
    //disabled button
    

};


function questionMatch(number){
    switch(number){
        
        case 1:
        return chosenCharacter.gender === 'male'; 
        
        case 2:
        return chosenCharacter.hairType === 'male';
            
    }
}
















