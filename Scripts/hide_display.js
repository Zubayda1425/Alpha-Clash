function scrnChanage(hide, show) {
    const hiddenSection = document.styleSheets[0].cssRules[hide].style;
    hiddenSection.removeProperty("display");
    hiddenSection.setProperty("display", "none");

    const showSection = document.styleSheets[0].cssRules[show].style;
    showSection.removeProperty("display");
    showSection.setProperty("display", "flex");
}
