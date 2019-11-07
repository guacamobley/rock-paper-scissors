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

function capitalize(str){
	let firstChar = str.slice(0,1);
	let rest = str.slice(1);
	return firstChar.toUpperCase() + rest.toLowerCase();
}

function fight(playerSelection, computerSelection){
	let tie = "tie";
	let win = "player";
	let lose = "computer";

	switch(playerSelection){
		case "Rock":
			switch(computerSelection){
				case "Rock":
					return tie;
					break;
				case "Paper":
					return lose;
					break;
				case "Scissors":
					return win;
					break;
			}
		case "Paper":
			switch(computerSelection){
				case "Rock":
					return win;
					break;
				case "Paper":
					return tie;
					break;
				case "Scissors":
					return lose;
					break;
			}
		case "Scissors":
			switch(computerSelection){
				case "Rock":
					return lose;
					break;
				case "Paper":
					return win;
					break;
				case "Scissors":
					return tie;
					break;
			}
	}
}

function singleRound(playerSelection, computerSelection){
	let formattedPlayerSelection = capitalize(playerSelection.trim());

	return fight(formattedPlayerSelection, computerSelection)	
}

function promptPlayer(){
	let playerSelection = prompt("Rock, Paper, or Scissors?");
	let formattedPlayerSelection = capitalize(playerSelection.trim());
	switch (formattedPlayerSelection){
		case "Rock":
		case "Paper":
		case "Scissors":
			return formattedPlayerSelection;
			break;
		default:
			if (confirm("You entered something besides Rock, Paper, or Scissors.  Do you want to keep playing? \n Press 'OK' to continue, or 'Cancel' to quit.")) {
					return promptPlayer();
			}else{
				return false;
			}
			break;

	}
}

function game(){
	let playerScore = 0;
	let computerScore = 0;
	let i;
	let numberOfGames = 5;
	let result, playerSelection, computerSelection;

	for(i = 0; i<numberOfGames; i++){
		playerSelection = promptPlayer();
		if (!playerSelection){
			return "You quit!";
		}
		computerSelection = computerPlay();
		result = singleRound(playerSelection, computerSelection);
		if (result === "player"){
			playerScore++;
		} else if (result === "computer"){
			computerScore++;
		}
	}

	if (playerScore > computerScore) {
		return "You won!";
	} else if (computerScore > playerScore) {
		return "You lost!";
	} else {
		return "You tied!";
	}

}




















