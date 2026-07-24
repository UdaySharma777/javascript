let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessFiled");
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lasrtResult');

const lowOrhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let preGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(UserInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if (guess<1){
        alert('Please enter a number more than 1')
    }
    else if(guess>100){
        alert('Please enter a numebr less than 100')
    }
    else{
        preGuess.push(guess)
        if(numGuess == 11){
            displayGuess(guess)
            displayMessage(`Game Over. random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guessed it right")
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage("number is less than guess")
    }
    else if(guess > randomNumber){
        displayMessage("number is more than guess")
    }
}

function displayGuess(guess){
    UserInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess} `;
}

function displayMessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1);
        preGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-newGuess}`;
        UserInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true
    })
}

function endGame(){
    UserInput.value = '';
    UserInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame>Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}





