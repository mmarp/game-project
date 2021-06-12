const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//Write a function_ on click, show game board

//Draw all characters


//1.Luis
const luis = new Character('luis', './Images/m.jpg', 'male', 'straight', 'brown', true, 'brown', false, false);
const luisPos = new Positioning(270, 75, 150, 150, luis);
luisPos.draw();

//2.Stefano
const stefano = new Character('stefano','./Images/m.jpg', 'male', 'wavy', 'brown', true, 'blue', false, false);
const stefanoPos = new Positioning(440, 75, 150, 150, stefano);
stefanoPos.draw();

//3.Danilo
const danilo = new Character('danilo','./Images/m.jpg', 'male', 'bald', 'brown', true, 'brown', false, false);
const daniloPos = new Positioning(610, 75, 150, 150, danilo);
daniloPos.draw();

//4.Ben
const ben = new Character('ben','./Images/m.jpg', 'female', 'straight', 'brown', false, 'blue', false, false);
const benPos = new Positioning(780, 75, 150, 150, ben);
benPos.draw();

//5.Joao F.
const joaoF = new Character('joaoF','./Images/m.jpg', 'male', 'straight', 'black', true, 'brown', false, true);
const joaoFPos = new Positioning(270, 245, 150, 150, joaoF);
joaoFPos.draw();

//6.Tiago P.
const tiagoP = new Character('tiagoP','./Images/m.jpg', 'male', 'straight', 'brown', true, 'green', false, false);
const tiagoPPos = new Positioning(440, 245, 150, 150, tiagoP);
tiagoPPos.draw();

//7.Gigi
const gigi = new Character('gigi','./Images/m.jpg', 'female', 'straight', 'brown', true, 'brown', false, false);
const gigiPos = new Positioning(610, 245, 150, 150, gigi);
gigiPos.draw();

//8.Joao B.
const joaoB = new Character('joaoB','./Images/m.jpg', 'male', 'straight', 'brown', true, 'brown', false, false);
const joaoBPos = new Positioning(780, 245, 150, 150, joaoB);
joaoBPos.draw();

//9.Victor
const victor = new Character('victor','./Images/m.jpg', 'male', 'straight', 'black', false, 'brown', false, false);
const victorPos = new Positioning(270, 415, 150, 150, victor);
victorPos.draw();

//10.Tiago S.
const tiagoS = new Character('tiagoS','./Images/m.jpg', 'male', 'straight', 'brown', true, 'brown', false, false);
const tiagoSPos = new Positioning(440, 415, 150, 150, tiagoS);
tiagoSPos.draw();

//11.Pedro
const pedro = new Character('pedro','./Images/m.jpg', 'male', 'wavy', 'brown', true, 'brown', false, false);
const pedroPos = new Positioning(610, 415, 150, 150, pedro);
pedroPos.draw();

//12.Beatriz
const beatriz = new Character('beatriz','./Images/m.jpg', 'female', 'straight', 'brown', false, 'brown', false, false);
const beatrizPos = new Positioning(780, 415, 150, 150, beatriz);
beatrizPos.draw();

//13.Margarida
const margarida = new Character('margarida','./Images/m.jpg', 'female', 'wavy', 'brown', false, 'brown', false, false);
const margaridaPos = new Positioning(270, 585, 150, 150, margarida);
margaridaPos.draw();

//14.Helder
const helder = new Character('helder','./Images/m.jpg', 'male', 'curly', 'black', true, 'brown', true, false);
const helderPos = new Positioning(440, 585, 150, 150, helder);
helderPos.draw();

//15.Gabriel
const gabriel = new Character('gabriel','./Images/m.jpg', 'male', 'straight', 'brown', true, 'brown', false, false);
const gabrielPos = new Positioning(610, 585, 150, 150, gabriel);
gabrielPos.draw();

//16.Miguel
const miguel = new Character('miguel','./Images/m.jpg', 'male', 'curly', 'brown', true, 'brown', false, false);
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

const chosenCharacter = pickMysteryCharacter();

document.getElementById("start-button").onclick = () => {
  document.getElementById('game-board').style.display = 'block';//display: block = when clicking shows the road
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('ask-button').style.display = 'block';
  console.log(chosenCharacter);
};



//Questions
let questions = 1;

document.getElementById('next-button').onclick = () => {
    if(questions < 3){
        questions++;
        console.log(questions);
    } else {
        document.getElementById('next-button').disabled = true;
    }
    
};


document.getElementById('prev-button').onclick = () => {
    if(questions > 1){
        questions--;
        console.log(questions);
    } else {
        document.getElementById('prev-button').disabled = true;
    }
    
};





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
    

};


function questionMatch(number){
    switch(number){
        case 1:
        return chosenCharacter.gender === 'male'; 

    }
}
















