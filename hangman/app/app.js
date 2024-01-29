const body = document.querySelector('#body');
const keyboard = document.querySelector(".keyboard");

const words = ['boar', 'mortgage', 'tenet', 'wrestling', 'smoothie', 'music'];
const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const hangman = ['<circle cx="50.5" cy="50.5" r="48" fill="grey" stroke="#909090" stroke-width="5"/>',
'<rect width="5" height="131" fill="#909090"/>', '<rect x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="#909090"/>',
'<rect y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="#909090"/>', 
'<rect x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="#909090"/>',
'<rect y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="#909090"/>'];

const createGame = () => {
    const container = document.createElement("div");
    container.className = "container";
    body.append(container);

    const header = document.createElement("header");
    header.className = "header";
    const main = document.createElement("main");
    main.className = "game";
    container.append(header, main);

    const startBtns = document.createElement("div")
    startBtns.className = "start-button";
    header.append(startBtns)
    const start = document.createElement("div")
    start.className = "start-game";
    start.innerHTML = "Start Game";
    const restart = document.createElement("div")
    restart.className = "start-again";
    restart.innerHTML = "Reset Game";
    startBtns.append(start, restart);

    

    for ( let i = 97; i <= 122; i++) {
        const letter = document.createElement("div");
        letter.innerText = String.fromCharCode(i);
        letter.className = "letter";
        keyboard.append(letter);
    }
}

createGame();