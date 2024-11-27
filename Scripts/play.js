
const letter = "abcdefghijklmnopqrstuvwx";
const alphabets = letter.split("");
const randomNumber = Math.round(Math.random() * 25);
const randomAlphabet = alphabets[randomNumber].toUpperCase();

const textArea = document.getElementById('text');
textArea.innerText = randomAlphabet;


function changeSelectedColor(alph) {
    const typedAlph = document.getElementById(alph);
    typedAlph.style.backgroundColor = "#9900e6";
    typedAlph.style.color = "white";
}

changeSelectedColor(randomAlphabet.toLocaleLowerCase())



