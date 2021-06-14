class Game {
    constructor(){
        this.gameOver = false;
        // to be reviewed
        this.score = 10;
        this.attempts = 5;
    }
}






//Draw all characters


//1.Luis
const luis = new Character('luis', './Images/margarida.jpg', 'male', 'straight', 'brown', true, 'brown', false, false);
const luisPos = new Positioning(270, 75, 150, 150, luis);
luisPos.draw();

//2.Stefano
const stefano = new Character('stefano','./Images/stefano.jpg', 'male', 'wavy', 'brown', true, 'blue', false, false);
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
const gabriel = new Character('gabriel','./Images/gabriel.jpg', 'male', 'straight', 'brown', true, 'brown', false, false);
const gabrielPos = new Positioning(610, 585, 150, 150, gabriel);
gabrielPos.draw();

//16.Miguel
const miguel = new Character('miguel','./Images/miguel.jpg', 'male', 'curly', 'brown', true, 'brown', false, false);
const miguelPos = new Positioning(780, 585, 150, 150, miguel);
miguelPos.draw();