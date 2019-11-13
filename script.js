let playerScore = 0;
let computerScore = 0;

const GAMES_TO_WIN = 5;
const TIE = "tie";
const WIN = "win";
const LOSE = "lose";

function computerPlay(){
	let signToPlay = Math.floor(Math.random() * 3);
	switch(signToPlay){
		case 0:
			return "Rock";
			break;
		case 1:
			return "Paper";
			break;
		case 2:
			return "Scissors";
			break;
		default:
			break;
	}
}



function fight(playerSelection, computerSelection){

	switch(playerSelection){
		case "Rock":
			switch(computerSelection){
				case "Rock":
					return TIE;
					break;
				case "Paper":
					return LOSE;
					break;
				case "Scissors":
					return WIN;
					break;
			}
		case "Paper":
			switch(computerSelection){
				case "Rock":
					return WIN;
					break;
				case "Paper":
					return TIE;
					break;
				case "Scissors":
					return LOSE;
					break;
			}
		case "Scissors":
			switch(computerSelection){
				case "Rock":
					return LOSE;
					break;
				case "Paper":
					return WIN;
					break;
				case "Scissors":
					return TIE;
					break;
			}
	}
}

function singleRound(e){
	let computerSelection = computerPlay();
	let playerSelection = this.id;
	switch (fight(playerSelection,computerSelection)){
		case WIN:
				playerScore++;
				updateResults();
			break;
		case LOSE:
				computerScore++;
				updateResults();
			break;
		case TIE:
			break;
	}
}



function updateResults(){
	player.textContent = `player: ${playerScore}`;
	computer.textContent = `computer: ${computerScore}`;
	if (playerScore >= GAMES_TO_WIN) winner.textContent = " You win!";
	if (computerScore >= GAMES_TO_WIN) winner.textContent = " You lose!";

}

const buttons = document.querySelectorAll(".action");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const winner = document.querySelector("#winner");

buttons.forEach(button => button.addEventListener("click",singleRound));
updateResults();
















