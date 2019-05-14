/* 
FUNKSIONALITETI
-LOJTARI DUHET TE SHTYP NJE NUMER BRENDA MIN DHE MAX
-LOJTARIT I JEPET NJE SASI E LIMITUAR E MUNDESIVE
-NJOFO LOJTARIN SA MUNDESI I KANE MBETUR
-NE RAST HUMBJEJE , TREGOJ LOJTARIT SE CILI ISHTE NUMRI I SAKTE
-LOJTARI MUND TE LUAJ PERSERI
*/

//Game Values
let min = 1 ,
    max = 10,
    winningNumber = getRandomNum(min , max),
    guessesLeft = 3;


//UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UserInterface Min&Max
minNum.textContent = min;
maxNum.textContent = max;

//Play Again Event Listener
game.addEventListener('mousedown' , function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

//Listen for Guess
guessBtn.addEventListener('click' , function() {
    let guess = parseInt(guessInput.value);

    //Validate this input
    if (isNaN(guess) || guess < 1 || guess > 10) {
        alert(`Please set a number between ${min} and ${max}` , 'red');
        return;
    }

    //Check if won
    if (guess === winningNumber) {

        //Game over -- WON
        gameOver(true , `${winningNumber} is correct , YOU WON`);

    } else {
         //Wrong number
         guessesLeft -= 1;
         if (guessesLeft === 0) {

            //Game Over -- LOST
           gameOver(false , `Game Over!! YOU LOST. The correct number was ${winningNumber}`);

         } else {
            //Game continues -- Answer Wrong
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';
            setMessage(`${guess} is not correct ,${guessesLeft} guesses left` , 'red');
         }
    }
});

//GameOver
function gameOver(won , msg) {
    let color ;
    won === true ? color = 'green' : color = 'red';
    //Disable input
    guessInput.disabled = true;
    //Change border color 
    guessInput.style.borderColor = color;
    //Set text color
    message.style.color = color;
    setMessage(msg);

    //Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//Get Winning Number
function getRandomNum(min , max) {
    return Math.floor(Math.random()*(max - min + 1)+min);
}

//Set Message
function setMessage(msg , color) {
    message.style.color = color;
    message.textContent = msg;
};