let humanScore = 0;
let computerScore = 0; 

const ROCK = 'rock 🗿';
const PAPER = 'paper 🧻';
const SCISSORS = 'scissors ✂️';

const resultPara = document.querySelector('#result');
const gameScorePara = document.querySelector('#score');

let humanSelection;
let computerSelection;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.textContent == 'Rock 🗿') {
			humanSelection = ROCK;
		} else if (button.textContent == 'Paper 🧻') {
			humanSelection = PAPER;
		} else if (button.textContent == 'Scussors ✂️') {
			humanSelection = SCISSORS;
		}
		playRound();
	});
});

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
	computerSelection = getComputerChoice();
	resultPara.textContent = `In this round human chose ${humanSelection}, and computer chose ${computerSelection}`;

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
	gameScorePara.textContent = `Human: ${humanScore}. Computer: ${computerScore}`;

	if (humanScore == 3) {
		gameScorePara.textContent = 'You won!';
		humanScore = 0;
		computerScore = 0;
		return;
	} else if (computerScore == 3) {
		gameScorePara.textContent = 'You loose';
		humanScore = 0;
		computerScore = 0;
		return;
	}
  }
