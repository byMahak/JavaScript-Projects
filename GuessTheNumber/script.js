let randomNumber = parseInt(Math.random()*100+1);

const form = document.querySelector(".form");
const inputGuess = document.querySelector("#guessField");
const submit = document.querySelector(".guessSubmit");
const prevGuess = document.querySelector(".prevGuess");
const remaining = document.querySelector(".remaining");
const lowORhigh = document.querySelector(".lowORhigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let guessSlot = [];
let numGuess = 1;
let playGame = true

if(playGame){
    form.addEventListener('submit',function(event){
        event.preventDefault();
        
        const guess = parseInt(inputGuess.value);
        validateGuess(guess)
    });
}

// It checks the number entered is in the range or not and if it does then pass it for further checking
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter Valid Number");
    }else if(guess > 100){
        alert("Please enter Number less than 100");
    }else if(guess<1){
        alert("Please enter Number greater than 1");
    }else{
        guessSlot.push(guess)
        if(numGuess===10){
            cleanUpGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            cleanUpGuess(guess)             // Update the values and check number is high or low.
            checkGuess(guess)               // Check it with Random Number and if user guessed correct one.
        }
    }
}

// It checks if the number user guess by comparing it with random number
function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`You Win!`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is low.`)
    }else if(guess>randomNumber){
        displayMessage(`Number is high.`)
    }
}

// It cleares the input field after the guess for next guess and updates previous guess and remaining chances
function cleanUpGuess(guess){
    inputGuess.value=''
    prevGuess.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

//  It displays the messages we passed as arguements
function displayMessage(message){
    lowORhigh.innerHTML = `<p>${message}</p>`
}

// End the game and reset the values to initial
function endGame(){
    inputGuess.value=''
    inputGuess.setAttribute('disabled','')
    p.classList.add('p')
    p.innerHTML='<p id="newGame" style="padding:5px;color:white;width:fit-content;margin:0 auto;background-color:rgb(255, 50, 50);border-radius: 5px;border: 2px solid rgb(203, 14, 14);">Start New Game</p>'
    startOver.appendChild(p)
    playGame=false
    newGame();
}

// Reset the values and start new game
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function (e) {
        randomNumber = parseInt(Math.random()*100+1);

        guessSlot = [];
        numGuess = 1;

        inputGuess.value='';
        prevGuess.innerHTML =''
        remaining.innerHTML = `${11 - numGuess}`;
        lowORhigh.innerHTML =''
    
        inputGuess.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true
    });
}