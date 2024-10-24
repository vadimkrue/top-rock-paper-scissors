// BASIC LOGIC

// We need to write a game rock-paper-scissors in a browser console
// — Participants: human and a computer
// — The person will choose an option (r/p/s), the computer will randomize choose its option
// — The winner is determined as follows:
//      Rock beats scissors
//      scissors beat paper
//      and paper beats rock
//  If the outcomes are the same, it's a tie



// STEPS

// [First] ROUND STARTS
//      Human enters an option (rock/paper/scissors)
//      The computer set it's option
//      Computer compares options
//      Computer defines winner based on this rules:
//              Rock beats scissors
//              scissors beat paper
//              and paper beats rock
//              * if results are the same it's a tie 
//      The comptuter announces ROUND RESULTS 
//              eather human win or loose or if it's a tie (and stores this result)
// [First] ROUND ENDS

// [Second] ROUND STARTS ... [Second] ROUND ENDS

// [Third] ROUND STARTS ... [Third] ROUND ENDS


// THE RESULTS
// Computer defines winner (2 or 3 wins) and looser (1 or 0 wins) or a tie (1 human w / tie / 1 computer w).
//      Computer does that by comparing results of the rounds
// Comptuter announces GAME RESULTS 
//      eather human win or loose or if it's a tie

// THE GAME STARTS AGAIN



// OUTPUT OPTIONS
const ROCK = 'rock 🗿';
const PAPER = 'paper 🧻';
const SCISSORS = 'scissors ✂️'

// SCORE TABLE (STARTING POINT)
let humanScore = 0;
let computerScore = 0; 



// GET THE HUMAN CHOICE
function getHumanChoise () {
	let result = prompt('Make a choice:\n\n— rock (type "r")\n— paper (type "p")\n— scissors (type "s")', '');
	
	if (result === 'r' || result === 'rock' || result === 'Rock') {
		return(ROCK);
	} else if (result === 'p' || result === 'paper' || result === 'Paper') {
		return(PAPER);
	} else if (result === 's' || result === 'scissors' || result === 'Scissors') {
		return(SCISSORS);
	} else {
		return('something unknown');
	}
}
// Check if getHumanChoise works:
alert(`Human chose ${getHumanChoise()}`);



// GET THE COMPUTER CHOICE
function getComputerChoice() {
	let result = Math.random();
	alert(result);
  
	if (result <= 0.33) {
	  return(ROCK);
	} else if (result <= 0.66) {
	  return(PAPER);
	} else if (result <= 0.99) {
	  return(SCISSORS);
	}
  }
// Check if getComputerChoice works:
alert(`Computer chose ${getComputerChoice()}`);



// SINGLE ROUND
// 		takes the human and computer player choices as arguments
// 		plays a single round
// 		increments the round winner’s score
// 		and logs a winner announcement.

function playRound (humanChoise, computerChoice) {

}
