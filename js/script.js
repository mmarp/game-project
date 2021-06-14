const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//Write a function_ on click, show game board

//Draw all characters


//1.Luis
const luis = new Character('luis', './Images/margarida.jpg', 'male', 'straight', 'brown', true, 'brown', false, false);
const luisPos = new Positioning(270, 75, 150, 150, luis);
luisPos.draw();

//2.Stefano
const stefano = new Character('stefano','./Images/margarida.jpg', 'male', 'wavy', 'brown', true, 'blue', false, false);
const stefanoPos = new Positioning(440, 75, 150, 150, stefano);
stefanoPos.draw();

//3.Danilo
const danilo = new Character('danilo','./Images/danilo.jpg', 'male', 'bald', 'brown', true, 'brown', false, false);
const daniloPos = new Positioning(610, 75, 150, 150, danilo);
daniloPos.draw();

//4.Ben
const ben = new Character('ben','./Images/ben.jpg', 'male', 'straight', 'brown', false, 'blue', false, false);
const benPos = new Positioning(780, 75, 150, 150, ben);
benPos.draw();

//5.Joao F.
const joaoF = new Character('joaoF','./Images/margarida.jpg', 'male', 'straight', 'black', true, 'brown', false, true);
const joaoFPos = new Positioning(270, 245, 150, 150, joaoF);
joaoFPos.draw();

//6.Tiago P.
const tiagoP = new Character('tiagoP','./Images/margarida.jpg', 'male', 'straight', 'brown', true, 'green', false, false);
const tiagoPPos = new Positioning(440, 245, 150, 150, tiagoP);
tiagoPPos.draw();

//7.Gigi
const gigi = new Character('gigi','./Images/gigi.jpg', 'female', 'straight', 'brown', true, 'brown', false, false);
const gigiPos = new Positioning(610, 245, 150, 150, gigi);
gigiPos.draw();

//8.Joao B.
const joaoB = new Character('joaoB','./Images/margarida.jpg', 'male', 'straight', 'brown', true, 'brown', false, false);
const joaoBPos = new Positioning(780, 245, 150, 150, joaoB);
joaoBPos.draw();

//9.Victor
const victor = new Character('victor','./Images/margarida.jpg', 'male', 'straight', 'black', false, 'brown', false, false);
const victorPos = new Positioning(270, 415, 150, 150, victor);
victorPos.draw();

//10.Tiago S.
const tiagoS = new Character('tiagoS','./Images/margarida.jpg', 'male', 'straight', 'brown', true, 'brown', false, false);
const tiagoSPos = new Positioning(440, 415, 150, 150, tiagoS);
tiagoSPos.draw();

//11.Pedro
const pedro = new Character('pedro','./Images/pedro.jpg', 'male', 'wavy', 'brown', true, 'brown', false, false);
const pedroPos = new Positioning(610, 415, 150, 150, pedro);
pedroPos.draw();

//12.Beatriz
const beatriz = new Character('beatriz','./Images/beatriz.jpg', 'female', 'straight', 'brown', false, 'brown', false, false);
const beatrizPos = new Positioning(780, 415, 150, 150, beatriz);
beatrizPos.draw();

//13.Margarida
const margarida = new Character('margarida','./Images/margarida.jpg', 'female', 'wavy', 'brown', false, 'brown', false, false);
const margaridaPos = new Positioning(270, 585, 150, 150, margarida);
margaridaPos.draw();

//14.Helder
const helder = new Character('helder','./Images/helder.jpg', 'male', 'curly', 'black', true, 'brown', true, false);
const helderPos = new Positioning(440, 585, 150, 150, helder);
helderPos.draw();

//15.Gabriel
const gabriel = new Character('gabriel','./Images/margarida.jpg', 'male', 'straight', 'brown', true, 'brown', false, false);
const gabrielPos = new Positioning(610, 585, 150, 150, gabriel);
gabrielPos.draw();

//16.Miguel
const miguel = new Character('miguel','./Images/miguel.jpg', 'male', 'curly', 'brown', true, 'brown', false, false);
const miguelPos = new Positioning(780, 585, 150, 150, miguel);
miguelPos.draw();



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
















