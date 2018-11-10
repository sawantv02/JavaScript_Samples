//game values
let min = 1,
	max = 10,
	winningNum = getRandomNum(min,max),
	guessesLeft = 3;

//ui elements
const game = document.querySelector('#game'),
	  minNum = document.querySelector('.min-num'),
	  maxNum = document.querySelector('.max-num'),
	  guessBtn = document.querySelector('#guess-btn'),
	  guessInput = document.querySelector('#guess-input'),
	  message = document.querySelector('.message');

//assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown',function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
});

//listen for guess
guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value);
	//validate
	if(isNaN(guess) || guess < min || guess > max){
		setMessage(`Please enter a number between ${min} and ${max}`,'red');
	}

	//check if won
	if(guess === winningNum){
		//game over -won
		//disable input
		// guessInput.disabled = true;
		// guessInput.style.borderColor = 'green';
		// setMessage(`${winningNum} is correct!You Win!`,'green');
		gameOver(true,`${winningNum} is correct!You Win!`);
	}else {
		guessesLeft-= 1;

		if(guessesLeft === 0) {
			//disable input
			// guessInput.disabled = true;
			// guessInput.style.borderColor = 'red';
			// setMessage(`Game Over!You Lost.The correct number was ${winningNum}`,'red');
			gameOver(false,`Game Over!You Lost.The correct number was ${winningNum}`);
		} else{
			//game continues-wrong answer
			guessInput.value = '';
			guessInput.style.borderColor = 'red';
			setMessage(`Guess is not correct.${guessesLeft} guesses left!`,'red');

		}
	}
});

function setMessage(msg,color) {
	message.style.color = color;
	message.textContent = msg;
}

function gameOver(won,msg) {

	let color;
	won === true ? color = 'green':color ='red';
	//disable input
	guessInput.disabled = true;
	guessInput.style.borderColor = color;
	setMessage(msg,color);

	//play again
	guessBtn.value = 'Play Again';
	guessBtn.className+= 'play-again';

}

//get winning number
function getRandomNum(min,max) {
	return Math.floor(Math.random()*(max-min+1) + min);
}