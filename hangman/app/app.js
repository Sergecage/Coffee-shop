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
    const hangmanParts = document.createElement("div");
    hangmanParts .className = "game-gallows-hagmans";
    const title = document.createElement("div");
    title.className = "game-gallows-title";
    title.innerHTML = "Hagman Game";
    game.append(gallow, hangmanParts , title);

    const vertical = document.createElement("div");
    vertical.className = "vertical";
    const horizontal = document.createElement("div");
    horizontal.className = "horizontal";
    const declined = document.createElement("div");
    declined.className = "declined";
    const hang = document.createElement("div");
    hang.className = "hang";
    gallow.append(vertical, horizontal, declined, hang);

    const head = document.createElement('img');
    head.className = "head";
    head.src = './img/head.svg';
    const torso = document.createElement('img');
    torso.className = "torso";
    torso.src = './img/body.svg';
    const leftArm = document.createElement('img');
    leftArm.className = "arm-left";
    leftArm.src = './img/hand-one.svg';
    const rightArm = document.createElement('img');
    rightArm.className = "arm-right";
    rightArm.src = "./img/hand-two.svg";
    const leftLeg = document.createElement('img');
    leftLeg.className = "leg-left";
    leftLeg.src = './img/leg-one.svg';
    const rightLeg = document.createElement('img');
    rightLeg.className = "leg-right";
    rightLeg.src = './img/leg-two.svg';
    hangmanParts.append(head, torso, leftArm, rightArm, leftLeg, rightLeg);

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
        head.style.display = "none";
        torso.style.display = "none";
            leftArm.style.display = "none";
            rightArm.style.display = "none";
            leftLeg.style.display = "none";
            rightLeg.style.display = "none";
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
        if (wrongGuess === 1) {
            head.style.display = "block";
        } 
        if (wrongGuess === 2) {
            head.style.display = "block";
            torso.style.display = "block";
        } 
        if (wrongGuess === 3) {
            head.style.display = "block";
            torso.style.display = "block";
            leftArm.style.display = "block";
        } 
        if (wrongGuess === 4) {
            head.style.display = "block";
            torso.style.display = "block";
            leftArm.style.display = "block";
            rightArm.style.display = "block";
        } 
        if (wrongGuess === 5) {
            head.style.display = "block";
            torso.style.display = "block";
            leftArm.style.display = "block";
            rightArm.style.display = "block";
            leftLeg.style.display = "block";
        } 
        if (wrongGuess === 6) {
            head.style.display = "block";
            torso.style.display = "block";
            leftArm.style.display = "block";
            rightArm.style.display = "block";
            leftLeg.style.display = "block";
            rightLeg.style.display = "block";
        } 
        
    }

    for ( let i = 97; i <= 122; i++) {
        const letterBTN = document.createElement("div");
        letterBTN.innerText = String.fromCharCode(i);
        letterBTN.className = "letter";
        keyboard.append(letterBTN);
        letterBTN.addEventListener('click', e => startGame(e.target, String.fromCharCode(i)));
        letterBTN.addEventListener('keydown', e => startGame(e.target, String.fromCharCode(i)));
    }

    let key; 
    const checkButton = (letter, pressed) => {
        if (startingWord.includes(pressed)) {
            letter.classList.add("right");
            [...startingWord].forEach((letter, index) => {
                if ( letter === pressed) {
                    correctLetters.push(letter);
                    gameLetter.querySelectorAll("li")[index].innerText = letter;
                    gameLetter.querySelectorAll("li")[index].classList.add("right");
                }
            })
        } else{
            wrongGuess++;
            pressed =letter.classList.add("wrong");
        }
    }
    
    document.addEventListener("keydown", checkButton);

    restart.addEventListener("click", getWord);
    restartWin.addEventListener('click', getWord);
    restartGame.addEventListener("click", getWord);

}

createGame();
