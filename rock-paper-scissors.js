const ROCK = 'rock 🗿';
const PAPER = 'paper 🧻';
const SCISSORS = 'scissors ✂️'

let humanScore = 0;
let computerScore = 0; 

function getHumanChoice () {
	let input = prompt('Make a choice:\n\n— rock (type "r")\n— paper (type "p")\n— scissors (type "s")', '');

	let result = input.toLowerCase();

	if (result === 'r' || result === 'rock') {
		return(ROCK);
	} else if (result === 'p' || result === 'paper') {
		return(PAPER);
	} else if (result === 's' || result === 'scissors') {
		return(SCISSORS);
	} else {
		return;
	}
}

function getComputerChoice() {
	let result = Math.random();
  
	if (result <= 0.33) {
	  return(ROCK);
	} else if (result <= 0.66) {
	  return(PAPER);
	} else if (result <= 0.99) {
	  return(SCISSORS);
	}
  }