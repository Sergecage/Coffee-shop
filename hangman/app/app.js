import words from "./data.js";
const body = document.querySelector('#body');

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
    header.append(startBtns);
    const start = document.createElement("div");
    start.className = "start-game";
    start.innerHTML = "Start Game";
    const restart = document.createElement("div");
    restart.className = "start-again";
    restart.innerHTML = "Reset Game";
    startBtns.append(start, restart);

    const game = document.createElement("section");
    game.className = "game-gallows"
    const form = document.createElement("section");
    form.className = "game-forms"
    main.append(game, form);

    const gallow = document.createElement("div");
    gallow.className = "game-gallows-lines";
    const hangman = document.createElement("div");
    hangman.className = "game-gallows-hagmans";
    const title = document.createElement("div");
    title.className = "game-gallows-title";
    title.innerHTML = "Hagman Game";
    game.append(gallow, hangman, title);

    const vertical = document.createElement("div");
    vertical.className = "vertical";
    const horizontal = document.createElement("div");
    horizontal.className = "horizontal";
    const declined = document.createElement("div");
    declined.className = "declined";
    const hang = document.createElement("div");
    hang.className = "hang";
    gallow.append(vertical, horizontal, declined, hang);

    const head = document.createElement('div');
    head.className = "head";
    const torso = document.createElement('div');
    torso.className = "torso";
    const leftArm = document.createElement('div');
    leftArm.className = "arm-left";
    const rightArm = document.createElement('div');
    rightArm.className = "arm-right";
    const leftLeg = document.createElement('div');
    leftLeg.className = "leg-left";
    const rightLeg = document.createElement('div');
    rightLeg.className = "leg-right";
    hangman.append(head, torso, leftArm, rightArm, leftLeg, rightLeg);

    const gameForm = document.createElement("div");
    gameForm.className = "game-form";
    const keyboard = document.createElement("div");
    keyboard.className = "keyboard";
    form.append(gameForm, keyboard);

    const gameLetter = document.createElement("ul");
    gameLetter.className = "game-form-letters";
    const hints = document.createElement("div");
    hints.className = "game-form-hint";
    hints.innerHTML = "Hint:The wild friend of farm pig";
    const counter = document.createElement("div");
    counter.className = "game-form-counter";
    counter.innerHTML = "Incorrect guesses:";
    const counterCheck = document.createElement("span");
    counterCheck.innerHTML = "0 / 6";
    counter.append(counterCheck);
    gameForm.append(gameLetter, hints, counter);

    const letterGuessed = document.createElement("li");
    letterGuessed.className = "game-form-letter";
    gameLetter.append(letterGuessed);

    const headSvg = document.createElement("svg");
    headSvg.setAttribute('width', 101);
    headSvg.setAttribute('height', 101);
    headSvg.setAttribute('fill', "none");
    head.append(headSvg);
    const circle = document.createElement("circle");
    circle.setAttribute('cx', 45);
    circle.setAttribute('cy', 45);
    circle.setAttribute('r', 38);
    circle.setAttribute('width', 60);
    circle.setAttribute('height', 60);
    circle.setAttribute('fill', "grey");
    circle.setAttribute('stroke', "#000000");
    circle.setAttribute('stroke-width', 5);
    headSvg.append(circle);

    const torsoSvg = document.createElement("svg");
    torsoSvg.setAttribute('width', 5);
    torsoSvg.setAttribute('height', 131);
    torsoSvg.setAttribute('viewBox', "0 0 68 81");
    torsoSvg.setAttribute('fill', "none");
    torso.append(torsoSvg);
    const torsoRec = document.createElement("rect");
    torsoRec.setAttribute('x', 63.7964);
    torsoRec.setAttribute('transform', "rotate(39.64 63.7964 0)");
    torsoRec.setAttribute('width', 5);
    torsoRec.setAttribute('height', 100);
    torsoRec.setAttribute('fill', "#909090");
    torsoSvg.append(torsoRec);

    const armLeftSvg = document.createElement("svg");
    armLeftSvg.setAttribute('width', 68);
    armLeftSvg.setAttribute('height', 81);
    armLeftSvg.setAttribute('viewBox', "0 0 68 81");
    armLeftSvg.setAttribute('fill', "none");
    leftArm.append(armLeftSvg);
    const armLeftRec = document.createElement("rect");
    armLeftRec.setAttribute('x', 63.7964);
    armLeftRec.setAttribute('transform', "rotate(-39.6353 0 3.18951)");
    armLeftRec.setAttribute('width', 5);
    armLeftRec.setAttribute('height', 100);
    armLeftRec.setAttribute('fill', "#909090");
    armLeftSvg.append(armLeftRec);
    
    const armRightSvg = document.createElement("svg");
    armRightSvg.setAttribute('width', 68);
    armRightSvg.setAttribute('height', 81);
    armRightSvg.setAttribute('viewBox', "0 0 68 81");
    armRightSvg.setAttribute('fill', "none");
    rightArm.append(armRightSvg);
    const armRightRec = document.createElement("rect");
    armRightRec.setAttribute('x', 63.7964);
    armRightRec.setAttribute('transform', "rotate(-39.6353 0 3.18951)");
    armRightRec.setAttribute('width', 5);
    armRightRec.setAttribute('height', 100);
    armRightRec.setAttribute('fill', "#909090");
    armRightSvg.append(armRightRec);

    const legLeftSvg = document.createElement("svg");
    legLeftSvg.setAttribute('width', 68);
    legLeftSvg.setAttribute('height', 81);
    legLeftSvg.setAttribute('viewBox', "0 0 68 81");
    legLeftSvg.setAttribute('fill', "none");
    leftLeg.append(legLeftSvg);
    const legLeftRec = document.createElement("rect");
    legLeftRec.setAttribute('x', 63.7964);
    legLeftRec.setAttribute('transform', "rotate(39.64 63.7964 0)");
    legLeftRec.setAttribute('width', 5);
    legLeftRec.setAttribute('height', 100);
    legLeftRec.setAttribute('fill', "#909090");
    legLeftSvg.append(legLeftRec);

    const legRightSvg = document.createElement("svg");
    legRightSvg.setAttribute('width', 68);
    legRightSvg.setAttribute('height', 81);
    legRightSvg.setAttribute('viewBox', "0 0 68 81");
    legRightSvg.setAttribute('fill', "none");
    rightLeg.append(legRightSvg);
    const legRightRec = document.createElement("rect");
    legRightRec.setAttribute('x', 63.7964);
    legRightRec.setAttribute('transform', "rotate(39.64 63.7964 0)");
    legRightRec.setAttribute('width', 5);
    legRightRec.setAttribute('height', 100);
    legRightRec.setAttribute('fill', "#909090");
    legRightSvg.append(legRightRec);

    const modalWin = document.createElement("div");
    modalWin.className = "modal-win";
    const modalLost = document.createElement("div");
    modalLost.className = "modal-lose";
    header.append(modalWin, modalLost);
    const heading = document.createElement("h2");
    heading.innerHTML = "You won!";
    const restartWin = document.createElement("div");
    restartWin.className = "restart";
    restartWin.innerHTML = "Restart game";
    const secretWordWin = document. createElement('h4');
    const imageWon = document.createElement("img")
    imageWon.src = "./img/Hangman.jpg";
    modalWin.append(heading, restartWin,secretWordWin, imageWon);
    const headingLost = document.createElement("h2");
    headingLost.innerHTML = "You lost!";
    const restartGame = document.createElement("div");
    restartGame.className = "restart";
    restartGame.innerHTML= "restart game";
    const secretWord = document. createElement('h4');
    const imageLost = document.createElement("img");
    imageLost.src = "./img/Hangmanlost.jpg";
    modalLost.append(headingLost, restartGame, secretWord, imageLost);


    let startingWord;
    let wrongGuess = 0;
    let correctLetters = [];
    const totalGuesses = 6;

    const resetGame = () => {
        wrongGuess = 0;
        correctLetters = [];
        counterCheck.innerText = `${wrongGuess} / ${totalGuesses}`;
        modalLost.style.display = "none";
        modalWin.style.display = "none";
        gameLetter.querySelectorAll("li").forEach((el) => el.classList.remove("right"));
        gameLetter.innerHTML = startingWord.split("").map(() => `<li class="game-form-letter"></li>`).join('');
        keyboard.querySelectorAll("div").forEach((el) => el.classList.remove("right"));
        keyboard.querySelectorAll("div").forEach((el) => el.classList.remove("wrong"));
    }

    //choose a word
    const getWord = () => {
        const {word, hint} = words[Math.floor(Math.random() * words.length)];
        startingWord = word;
        hints.innerText = hint;
        resetGame();
    }
    getWord();

    const endOfGame = () => {
        modalLost.style.display = "flex";
        secretWord.innerHTML = "The secret word was: " + `${startingWord}`;
    }

    const endOfGameWin = () => {
        modalWin.style.display = "flex";
        secretWordWin.innerHTML = "The secret word was: " + `${startingWord}`;
    }


    const startGame = (letter, clicked) => {
        if (startingWord.includes(clicked)) {
            letter.classList.add("right");
            [...startingWord].forEach((letter, index) => {
                if ( letter === clicked) {
                    correctLetters.push(letter);
                    gameLetter.querySelectorAll("li")[index].innerText = letter;
                    gameLetter.querySelectorAll("li")[index].classList.add("right");
                }
            })
        } else{
            wrongGuess++;
            letter.classList.add("wrong");
        }
        counterCheck.innerText = `${wrongGuess} / ${totalGuesses}`;

        if (wrongGuess === totalGuesses) return endOfGame();
        if (correctLetters.length === startingWord.length) return endOfGameWin();
    }

    for ( let i = 97; i <= 122; i++) {
        const letterBTN = document.createElement("div");
        letterBTN.innerText = String.fromCharCode(i);
        letterBTN.className = "letter";
        keyboard.append(letterBTN);
        letterBTN.addEventListener('click', e => startGame(e.target, String.fromCharCode(i)));
    }

    restart.addEventListener("click", getWord);
    restartWin.addEventListener('click', getWord);
    restartGame.addEventListener("click", getWord);

}

createGame();