//Credits animation
document.getElementById('credits').onclick = () => {
    clearCanvas.clear();
    gameBoard.style.backgroundImage = 'none';
    let firstLineY = 0;
    let firstNameX = 20;
    let andSymbolX = -100;
    let secondNameX = -100;
    let secondLineX1 = -150
    let secondLineY1 = -70
    let secondLineX2 = 1200
    let secondLineY2 = 720
    let thirdLineX = 1500;
    let fourthLineY = 1200;

    function updateCanvasText() {
        firstLineY += 2;
        firstNameX += 3;
        andSymbolX += 4;
        secondNameX += 5;
        secondLineX1 += 4;
        secondLineY1 += 3;
        secondLineX2 -= 4;
        secondLineY2 -= 3;
        thirdLineX -= 5;
        fourthLineY -= 3
        clearCanvas.clear();
        drawText("created by", 505, firstLineY, 'black', 24);
        drawText("margarida pereira", firstNameX, 220, 'red', 24);
        drawText("&", andSymbolX, 220, 'black');
        drawText("pedro garrett", secondNameX, 220, 'blue', 24);
        drawText("class of 2021, ironhack,", secondLineX1, secondLineY1, "black", 24);
        drawText("web development", secondLineX2, secondLineY2, "black", 24);
        drawText("special thanks to", thirdLineX, 360, "black", 24);
        drawText("all our friends and family, who don't even know we were doing this", 180, fourthLineY, "black", 24);
        if (firstLineY >= 150) firstLineY = 150;
        if (firstNameX >= 360) firstNameX = 360;
        if (andSymbolX >= 595) andSymbolX = 595;
        if (secondNameX >= 615) secondNameX = 615;
        if (secondLineX1 >= 320) {
            secondLineX1 = 320;
            secondLineY1 = 290;
        }
        if (secondLineX2 <= 640) {
            secondLineX2 = 640;
            secondLineY2 = 296;
        }
        if (thirdLineX <= 470) thirdLineX = 470;
        if (fourthLineY <= 430) fourthLineY = 430;
        requestAnimationFrame(updateCanvasText);
    }
    updateCanvasText();
}