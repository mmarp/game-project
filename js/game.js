class Game {
    constructor(){
        this.gameOver = false;
        // to be reviewed
        this.score = 10;
        this.attempts = 3;
        this.isEasyMode = false;
    }
}





//Draw all characters


//1.Luis
const luis = new Character('Luís', 1, ['./Images/luis.jpg', './Images/luis_out.jpg','./Images/pick/pick1.jpg', './Images/final_pick/luis-yes.jpg', './Images/final_pick/luis-no.jpg'], 'male', 'straight', 'black', true, 'brown', false);
const luisPos = new Positioning(270, 75, 150, 150, luis);
luisPos.draw(0);

//2.Stefano
const stefano = new Character('Stefano', 2,['./Images/stefano.jpg', './Images/stefano_out.jpg', './Images/pick/pick2.jpg', './Images/final_pick/stefano-yes.jpg', './Images/final_pick/stefano-no.jpg'], 'male', 'straight', 'blonde', true, 'blue', false);
const stefanoPos = new Positioning(440, 75, 150, 150, stefano);
stefanoPos.draw(0);

//3.Danilo
const danilo = new Character('Danilo', 3,['./Images/danilo.jpg', './Images/danilo_out.jpg', './Images/pick/pick3.jpg', './Images/final_pick/danilo-yes.jpg', './Images/final_pick/danilo-no.jpg'], 'male', 'straight', 'brown', true, 'brown', false);
const daniloPos = new Positioning(610, 75, 150, 150, danilo);
daniloPos.draw(0);

//4.Ben
const ben = new Character('Ben', 4,['./Images/ben.jpg', './Images/ben_out.jpg', './Images/pick/pick4.jpg', './Images/final_pick/ben-yes.jpg', './Images/final_pick/ben-no.jpg'], 'male', 'straight', 'brown', true, 'blue', true);
const benPos = new Positioning(780, 75, 150, 150, ben);
benPos.draw(0);

//5.Joao F.
const joaoF = new Character('João F.', 5,['./Images/joaoF.jpg', './Images/joaoF_out.jpg', './Images/pick/pick5.jpg', './Images/final_pick/joaoF-yes.jpg', './Images/final_pick/joaoF-no.jpg'], 'male', 'straight', 'brown', false, 'brown', true);
const joaoFPos = new Positioning(270, 245, 150, 150, joaoF);
joaoFPos.draw(0);

//6.Tiago P.
const tiagoP = new Character('Tiago P.', 6,['./Images/tiagoP.jpg', './Images/tiagoP_out.jpg', './Images/pick/pick6.jpg', './Images/final_pick/tiagoP-yes.jpg', './Images/final_pick/tiagoP-no.jpg'], 'male', 'straight', 'brown', true, 'green', false);
const tiagoPPos = new Positioning(440, 245, 150, 150, tiagoP);
tiagoPPos.draw(0);

//7.Gigi
const gigi = new Character('Gigi', 7,['./Images/gigi.jpg', './Images/gigi_out.jpg', './Images/pick/pick7.jpg', './Images/final_pick/gigi-yes.jpg', './Images/final_pick/gigi-no.jpg'], 'female', 'wavy', 'blonde', false, 'brown', false);
const gigiPos = new Positioning(610, 245, 150, 150, gigi);
gigiPos.draw(0);

//8.Joao B.
const joaoB = new Character('João B.', 8,['./Images/joaoB.jpg', './Images/joaoB_out.jpg', './Images/pick/pick8.jpg', './Images/final_pick/joaoB-yes.jpg', './Images/final_pick/joaoB-no.jpg'], 'male', 'straight', 'brown', true, 'brown', false);
const joaoBPos = new Positioning(780, 245, 150, 150, joaoB);
joaoBPos.draw(0);

//9.Victor
const victor = new Character('Victor', 9,['./Images/victor.jpg', './Images/victor_out.jpg', './Images/pick/pick9.jpg', './Images/final_pick/victor-yes.jpg', './Images/final_pick/victor-no.jpg'], 'male', 'wavy', 'black', true, 'brown', false);
const victorPos = new Positioning(270, 415, 150, 150, victor);
victorPos.draw(0); 

//10.Tiago S.
const tiagoS = new Character('Tiago S.', 10,['./Images/tiagoS.jpg', './Images/tiagoS_out.jpg', './Images/pick/pick10.jpg', './Images/final_pick/tiagoS-yes.jpg', './Images/final_pick/tiagoS-no.jpg'], 'male', 'straight', 'brown', true, 'brown', true);
const tiagoSPos = new Positioning(440, 415, 150, 150, tiagoS);
tiagoSPos.draw(0);

//11.Pedro
const pedro = new Character('Pedro', 11,['./Images/pedro.jpg', './Images/pedro_out.jpg', './Images/pick/pick11.jpg',  './Images/final_pick/pedro-yes.jpg', './Images/final_pick/pedro-no.jpg'], 'male', 'straight', 'brown', true, 'brown', false);
const pedroPos = new Positioning(610, 415, 150, 150, pedro);
pedroPos.draw(0);

//12.Beatriz
const beatriz = new Character('Beatriz', 12,['./Images/beatriz.jpg', './Images/beatriz_out.jpg', './Images/pick/pick12.jpg', './Images/final_pick/beatriz-yes.jpg', './Images/final_pick/beatriz-no.jpg'], 'female', 'straight', 'brown', false, 'brown', false);
const beatrizPos = new Positioning(780, 415, 150, 150, beatriz);
beatrizPos.draw(0);

//13.Margarida
const margarida = new Character('Margarida', 13,['./Images/margarida.jpg', './Images/margarida_out.jpg', './Images/pick/pick13.jpg', './Images/final_pick/margarida-yes.jpg', './Images/final_pick/margarida-no.jpg'], 'female', 'wavy', 'brown', false, 'green', false);
const margaridaPos = new Positioning(270, 585, 150, 150, margarida);
margaridaPos.draw(0);

//14.Helder
const helder = new Character('Helder', 14,['./Images/helder.jpg', './Images/helder_out.jpg', './Images/pick/pick14.jpg', './Images/final_pick/helder-yes.jpg', './Images/final_pick/helder-no.jpg'], 'male', 'wavy', 'black', true, 'brown', true);
const helderPos = new Positioning(440, 585, 150, 150, helder);
helderPos.draw(0);

//15.Gabriel
const gabriel = new Character('Gabriel', 15,['./Images/gabriel.jpg', './Images/gabriel_out.jpg', './Images/pick/pick15.jpg', './Images/final_pick/gabriel-yes.jpg', './Images/final_pick/gabriel-no.jpg'], 'male', 'straight', 'brown', true, 'brown', false);
const gabrielPos = new Positioning(610, 585, 150, 150, gabriel);
gabrielPos.draw(0);

//16.Miguel
const miguel = new Character('Miguel', 16,['./Images/miguel.jpg', './Images/miguel_out.jpg', './Images/pick/pick16.jpg',  './Images/final_pick/miguel-yes.jpg', './Images/final_pick/miguel-no.jpg'], 'male', 'wavy', 'black', false, 'brown', false);
const miguelPos = new Positioning(780, 585, 150, 150, miguel);
miguelPos.draw(0);


const charactersArray = [luis, stefano, danilo, ben, joaoF, tiagoP,
    gigi, joaoB, victor, tiagoS, pedro, beatriz, margarida, helder, gabriel, miguel
];


const characterPosArray = [luisPos, stefanoPos, daniloPos, benPos, joaoFPos,
     tiagoPPos, gigiPos, joaoBPos, victorPos, tiagoSPos, pedroPos, beatrizPos,
    margaridaPos, helderPos, gabrielPos, miguelPos];