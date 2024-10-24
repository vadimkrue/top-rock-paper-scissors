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
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors'

// GET THE HUMAN CHOISE
function getHumanChoise () {
	let humanChoise = prompt('Make a choice:\n\n— rock (type "r")\n— paper (type "p")\n— scissors (type "s")', '');
	
	if (humanChoise === 'r' || humanChoise === 'rock' || humanChoise === 'Rock') {
		return('rock');
	} else if (humanChoise === 'p' || humanChoise === 'paper' || humanChoise === 'Paper') {
		return('paper');
	} else if (humanChoise === 's' || humanChoise === 'scissors' || humanChoise === 'Scissors') {
		return('scissors');
	} else {
		return('something unknown');
	}
}

// Check if getHumanChoise works:
// alert(`Human chose ${getHumanChoise()}`);