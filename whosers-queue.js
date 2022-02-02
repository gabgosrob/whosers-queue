const globalWinrates = document.querySelectorAll(".winratio");
const recentWins = document.querySelectorAll(".is-win--true");
const recentLosses = document.querySelectorAll(".is-win--false");
const headerElement = document.querySelector(".Header");

function getGlobalWinrate() {
    let sum = 0;
    globalWinrates.forEach((winrate) => {
        sum += parseInt(winrate.innerText);
    });

    const averageWinrate = sum / globalWinrates.length;

    return averageWinrate;
}

function getRecentWinrate() {
    const averageWinrate =
        (recentWins.length / (recentWins.length + recentLosses.length)) * 100;

    return averageWinrate;
}

function addWinnersQueueElement() {
    let winnersQueueElement = document.createElement("div");
    winnersQueueElement.innerText = "WINNER'S QUEUE";
    winnersQueueElement.style.fontSize = "25px";
    winnersQueueElement.style.fontFamily = "americanCaptain";
    winnersQueueElement.style.textShadow = "black 1px 1px 1px";
    winnersQueueElement.style.backgroundColor = "#98FB98";
    winnersQueueElement.style.padding = "10px";
    winnersQueueElement.style.textAlign = "center";

    headerElement.appendChild(winnersQueueElement);
}

function addLosersQueueElement() {
    let losersQueueElement = document.createElement("div");
    losersQueueElement.innerText = "LOSER'S QUEUE";
    losersQueueElement.style.fontSize = "25px";
    losersQueueElement.style.fontFamily = "americanCaptain";
    losersQueueElement.style.textShadow = "black 1px 1px 1px";
    losersQueueElement.style.backgroundColor = "#EE4B2B";
    losersQueueElement.style.padding = "10px";
    losersQueueElement.style.textAlign = "center";

    headerElement.appendChild(losersQueueElement);
}

async function loadFonts() {
    const font = new FontFace("americanCaptain", "fonts/AmericanCaptain.ttf");
    await font.load();
    document.fonts.add(font);
}

loadFonts();

const totalWinRate = (getGlobalWinrate() + getRecentWinrate()) / 2;
if (totalWinRate > 50) {
    addWinnersQueueElement();
} else {
    addLosersQueueElement();
}
