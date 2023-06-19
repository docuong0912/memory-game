function Result(){
	//other
intervals.forEach(interval=>clearInterval(interval));
timeouts.forEach(timeout=>clearTimeout(timeout));

//create element
const resultOutterContainer = document.createElement("div");
resultOutterContainer.id = "result";
const resultInnerContainer = document.createElement("div");
const result = document.createElement("h1");
const description = document.createElement("p");
const blockInfoContainer = document.createElement("div");
const resultHeaderContainer = document.createElement("div");
const btnContainer = document.createElement("div");
const restartBtn = document.createElement("button");
const newgameBtn = document.createElement("button");
restartBtn.appendChild(document.createTextNode("Restart"));
newgameBtn.appendChild(document.createTextNode("Setup New Game"));
restartBtn.addEventListener("click",restart);
newgameBtn.addEventListener("click",newGame);
btnContainer.appendChild(restartBtn);
btnContainer.appendChild(newgameBtn);
resultHeaderContainer.appendChild(result);
resultHeaderContainer.appendChild(description);
resultInnerContainer.appendChild(resultHeaderContainer);

if(playerNum == 1){
	result.appendChild(document.createTextNode("You did it"));
	description.appendChild(document.createTextNode("Game over! Here's how you got on..."));
	const block1 = document.createElement("div");
	const block2 = document.createElement("div");
	block1.classList.add("playerBoxContainer");
	block2.classList.add("playerBoxContainer");
	const timeInfo = document.createElement("p");
	const moveInfo = document.createElement("p");
	const totalTime = document.createElement("p");
	const moves = document.createElement("p");
	totalTime.textContent = "".concat((min<10)?"0"+min:min,":",(sec<10)? "0"+sec:sec);
	moves.textContent = players[0].move;

	timeInfo.appendChild(document.createTextNode("Time Elapsed"));
	moveInfo.appendChild(document.createTextNode("Moves Taken"));

	block1.appendChild(timeInfo);
	block2.appendChild(moveInfo);
	block1.appendChild(totalTime);
	block2.appendChild(moves);
	blockInfoContainer.appendChild(block1);
	blockInfoContainer.appendChild(block2);
	resultInnerContainer.appendChild(blockInfoContainer);
}
else{
	let playerResult = sortPlayer();
	if(playerResult[0].score == playerResult[1].score){
		result.appendChild(document.createTextNode("It's a tie!"));
	}
	else
	result.appendChild(document.createTextNode(playerResult[0].name+" Wins!"));
	description.appendChild(document.createTextNode("Game over! Here are the result..."));
	playerResult.map((player,key)=>{
		const block = document.createElement("div");
		block.classList.add("playerBoxContainer");
		const playerName = document.createElement("p");
		const playerScore = document.createElement("p");
		if(player.score==max)
		playerName.appendChild(document.createTextNode(player.name+"(Winner!)"));
		else
		playerName.appendChild(document.createTextNode(player.name));
		playerScore.appendChild(document.createTextNode(player.score+" Pairs"));
		if(player.score==max){
			 block.classList.add("winner");
		}
		block.appendChild(playerName);
		block.appendChild(playerScore);
		blockInfoContainer.appendChild(block);
		resultInnerContainer.appendChild(blockInfoContainer);
	})
}

//add child
resultInnerContainer.appendChild(btnContainer);
resultOutterContainer.appendChild(resultInnerContainer);
 
body.appendChild(resultOutterContainer);

//style
resultOutterContainer.classList.add("resultOutterContainer");
resultInnerContainer.classList.add("resultInnerContainer");
btnContainer.classList.add("btnResultContainer");
}
function sortPlayer(){
	let player = [...players];
	for (var i = 0; i < player.length; i++) {
		for (var j = i+1; j < player.length; j++) {
			if(player[j].score>player[i].score){
				let temp;
				temp = player[i];
				player[i] = player[j];
				player[j] = temp;
			}
		}
	}
	return player;
}
