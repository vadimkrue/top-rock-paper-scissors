const ROCK = 'rock 🗿';
const PAPER = 'paper 🧻';
const SCISSORS = 'scissors ✂️'

let humanScore = 0;
let computerScore = 0; 

function getHumanChoice () {
	let humanInput = prompt('Make a choice:\n\n— rock (type "r")\n— paper (type "p")\n— scissors (type "s")', '').toLowerCase();

	if (humanInput === 'r' || humanInput === 'rock') {
		return(ROCK);
	} else if (humanInput === 'p' || humanInput === 'paper') {
		return(PAPER);
	} else if (humanInput === 's' || humanInput === 'scissors') {
		return(SCISSORS);
	} else {
		console.log('Unknown weapon. What is this?')
		return undefined;
	}
}

function getComputerChoice() {
	let  computerInput = Math.random();

	if (computerInput <= 0.33) {
		computerOutput = ROCK;
	} else if (computerInput <= 0.66) {
		computerOutput = PAPER;
	} else if (computerInput <= 0.99) {
		computerOutput = SCISSORS;
	}
	return(computerOutput);
  }

function playRound () {
	let humanSelection = getHumanChoice();
	let computerSelection = getComputerChoice();

	if (humanSelection === undefined) {
		console.log('Computer won\'t beat this thing. Not a fair fight')
		return;
	}

	console.log(`In this round human chose ${humanSelection} \ncomputer chose ${computerSelection}`);

	if ((humanSelection === ROCK && computerSelection === SCISSORS) 
		|| (humanSelection === PAPER && computerSelection === ROCK)
		|| (humanSelection === SCISSORS && computerSelection === PAPER)) {
		humanScore += 1;
	} else if (humanSelection === computerSelection) {
		humanScore += 1;
		computerScore += 1;
	} else {
		computerScore += 1;
	}
  }

function playGame () {
	playRound();
	console.log(`Round 1 \n\nHuman: ${humanScore} \nComputer: ${computerScore}`);
	
	playRound();
	console.log(`Round 2 \n\nHuman: ${humanScore} \nComputer: ${computerScore}`);
	
	playRound();
	console.log(`Round 3 \n\nHuman: ${humanScore} \nComputer: ${computerScore}`);

	let gameResult = (humanScore > computerScore) ? 'GAME: HUMAN WON' :
		(humanScore < computerScore) ? 'GAME: COMPUTER WON' :
		'GAME: IT\'S A TIE' ;
	
	console.log(gameResult);
}

playGame();