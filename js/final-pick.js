//Final answer images

let pick = 1;





function renderPick() {
    let containerPick = document.getElementById('f-answer');

    containerPick.innerHTML = `<img class="f-answer-img" src="./Images/pick/pick${pick}.jpg">`;
}


let fPrev = document.getElementById('f-prev-button');
let fNext = document.getElementById('f-next-button');

fPrev.onclick = function () {
    if (pick > 1) {
        pick = pick - 1;
        renderPick();
        addCharacterEvent();
    }

};

fNext.onclick = function () {
    if (pick < 16) {
        pick = pick + 1;
        renderPick();
        addCharacterEvent();

    }

};

renderPick();
