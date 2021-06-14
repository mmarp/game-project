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
const luis = new Character('luis', ['./Images/luis.jpg', './Images/luis_out.jpg'], 'male', 'straight', 'black', true, 'brown', false);
const luisPos = new Positioning(270, 75, 150, 150, luis);
luisPos.draw(0);

//2.Stefano
const stefano = new Character('stefano',['./Images/stefano.jpg', './Images/stefano_out.jpg'], 'male', 'straight', 'blonde', true, 'blue', false);
const stefanoPos = new Positioning(440, 75, 150, 150, stefano);
stefanoPos.draw(0);

//3.Danilo
const danilo = new Character('danilo',['./Images/danilo.jpg', './Images/danilo_out.jpg'], 'male', 'straight', 'brown', true, 'brown', false);
const daniloPos = new Positioning(610, 75, 150, 150, danilo);
daniloPos.draw(0);

//4.Ben
const ben = new Character('ben',['./Images/ben.jpg', './Images/ben_out.jpg'], 'male', 'straight', 'brown', true, 'blue', true);
const benPos = new Positioning(780, 75, 150, 150, ben);
benPos.draw(0);

//5.Joao F.
const joaoF = new Character('joaoF',['./Images/joaoF.jpg', './Images/joaoF_out.jpg'], 'male', 'straight', 'brown', false, 'brown', true);
const joaoFPos = new Positioning(270, 245, 150, 150, joaoF);
joaoFPos.draw(0);

//6.Tiago P.
const tiagoP = new Character('tiagoP',['./Images/tiagoP.jpg', './Images/tiagoP_out.jpg'], 'male', 'straight', 'brown', true, 'green', false);
const tiagoPPos = new Positioning(440, 245, 150, 150, tiagoP);
tiagoPPos.draw(0);

//7.Gigi
const gigi = new Character('gigi',['./Images/gigi.jpg', './Images/gigi_out.jpg'], 'female', 'wavy', 'blonde', false, 'brown', false);
const gigiPos = new Positioning(610, 245, 150, 150, gigi);
gigiPos.draw(0);

//8.Joao B.
const joaoB = new Character('joaoB',['./Images/joaoB.jpg', './Images/joaoB_out.jpg'], 'male', 'straight', 'brown', true, 'brown', false);
const joaoBPos = new Positioning(780, 245, 150, 150, joaoB);
joaoBPos.draw(0);

//9.Victor
const victor = new Character('victor',['./Images/victor.jpg', './Images/victor_out.jpg'], 'male', 'wavy', 'black', true, 'brown', false);
const victorPos = new Positioning(270, 415, 150, 150, victor);
victorPos.draw(0); 

//10.Tiago S.
const tiagoS = new Character('tiagoS',['./Images/tiagoS.jpg', './Images/tiagoS_out.jpg'], 'male', 'straight', 'brown', true, 'brown', true);
const tiagoSPos = new Positioning(440, 415, 150, 150, tiagoS);
tiagoSPos.draw(0);

//11.Pedro
const pedro = new Character('pedro',['./Images/pedro.jpg', './Images/pedro_out.jpg'], 'male', 'straight', 'brown', true, 'brown', false);
const pedroPos = new Positioning(610, 415, 150, 150, pedro);
pedroPos.draw(0);

//12.Beatriz
const beatriz = new Character('beatriz',['./Images/beatriz.jpg', './Images/beatriz_out.jpg'], 'female', 'straight', 'brown', false, 'brown', false);
const beatrizPos = new Positioning(780, 415, 150, 150, beatriz);
beatrizPos.draw(0);

//13.Margarida
const margarida = new Character('margarida',['./Images/margarida.jpg', './Images/margarida_out.jpg'], 'female', 'wavy', 'brown', false, 'green', false);
const margaridaPos = new Positioning(270, 585, 150, 150, margarida);
margaridaPos.draw(0);

//14.Helder
const helder = new Character('helder',['./Images/helder.jpg', './Images/helder_out.jpg'], 'male', 'wavy', 'black', true, 'brown', true);
const helderPos = new Positioning(440, 585, 150, 150, helder);
helderPos.draw(0);

//15.Gabriel
const gabriel = new Character('gabriel',['./Images/gabriel.jpg', './Images/gabriel_out.jpg'], 'male', 'straight', 'brown', true, 'brown', false);
const gabrielPos = new Positioning(610, 585, 150, 150, gabriel);
gabrielPos.draw(0);

//16.Miguel
const miguel = new Character('miguel',['./Images/miguel.jpg', './Images/miguel_out.jpg'], 'male', 'wavy', 'black', false, 'brown', false);
const miguelPos = new Positioning(780, 585, 150, 150, miguel);
miguelPos.draw(0);