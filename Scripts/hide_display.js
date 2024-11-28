function scrnChanage(hide, show) {
    const hiddenSection = document.styleSheets[0].cssRules[hide].style;
    hiddenSection.removeProperty("display");
    hiddenSection.setProperty("display", "none");

    const showSection = document.styleSheets[0].cssRules[show].style;
    showSection.removeProperty("display");
    showSection.setProperty("display", "flex");


}

console.log(document.styleSheets[0]);

function hideScrn (hideScrnID){
    const hiddenSection = document.styleSheets[0].cssRules[hideScrnID].style;
    hiddenSection.removeProperty("display");
    hiddenSection.setProperty("display", "none");
}

function showScrn (showScrnID){
    const showSection = document.styleSheets[0].cssRules[showScrnID].style;
    showSection.removeProperty("display");
    showSection.setProperty("display", "flex");
}

function homeToPlayground(){
    hideScrn(3);
    showScrn(8);
}
function playgroundToScore(){
    hideScrn(8);
    showScrn(23);
}
function scoreToPlayground(){
    hideScrn(23);
    showScrn(8);
    gameLoop();
}

// function 
