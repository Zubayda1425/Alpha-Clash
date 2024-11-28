
function createRandomAlphabet() {
    const letter = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = letter.split("");
    const randomNumber = Math.round(Math.random() * 25);
    const randomAlphabet = alphabets[randomNumber].toLocaleUpperCase();
    return randomAlphabet;
}

function setSelectedColor(alph) {
    const typedAlph = document.getElementById(alph);
    typedAlph.style.backgroundColor = "#9900e6";
    typedAlph.style.color = "white";
}

function removeSelectedColor(alph) {
    const typedAlph = document.getElementById(alph);
    typedAlph.style.backgroundColor = "white";
    typedAlph.style.color = "black";
}

function gameLoop() {
    const alph = createRandomAlphabet();
    const textArea = document.getElementById('text');
    textArea.innerText = alph;

    setSelectedColor(alph.toLowerCase());
}

function getTextElementById(elementId) {
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    const value = parseInt(elementTextValue);
    return value;
}

function setTextElementById(elementId, value) {
    const elementBtn = document.getElementById(elementId);
    elementBtn.innerText = value;
}

function gameOver() {
    playgroundToScore();
    setTextElementById('score', 0);
    setTextElementById('life', 5);
}


document.addEventListener("keyup", function (event) {
    const typedAplh = event.key;
    const expectedText = document.getElementById('text').innerText;

    if (expectedText.toLowerCase() === typedAplh) {
        gameLoop();
        removeSelectedColor(typedAplh);

        const currentScore = getTextElementById('score');
        const updateScore = currentScore + 1;
        setTextElementById('score', updateScore);

    }
    else {
        const currentLife = getTextElementById('life');
        const updateLife = currentLife - 1;
        setTextElementById('life', updateLife);

        if (updateLife === -1) {
            setTextElementById('finalScore', getTextElementById('score'))
            gameOver();
            removeSelectedColor(expectedText.toLowerCase());
        }
    }
});


