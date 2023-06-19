function Player(id) {
	 this.id = id;
	 this.name = "Player "+(id+1);
	 this.score = 0; 
	 this.move = 0;
}
function displayPlayer(){
	const playerContainer = document.createElement("footer");
	const playerBoxContainer = document.createElement("div");
	playerBoxContainer.classList.add("box-container");
	if(playerNum==1){
		const timerContainer = document.createElement("div");
		timerContainer.classList.add("timer");
		const timeHeader = document.createElement("p");
		timeHeader.appendChild(document.createTextNode("Time"));
		const timer = document.createElement("p");
		timer.textContent = "00:00"
		
		time = setInterval(()=>{
			sec++;
			if(sec>59){
				sec=0;
				min++;
			}
			timer.textContent =  "".concat((min<10)?"0"+min:min,":",(sec<10)? "0"+sec:sec);
			

		},1000);
		intervals.push(time);
		const moveContainer = document.createElement("div");
		moveContainer.classList.add("timer");
		const moveHeader = document.createElement("p");
		moveHeader.appendChild(document.createTextNode("Move"));
		const moveStep = document.createElement("p");
		moveStep.textContent = "0";
		const playerMove = setInterval(()=>{
			moveStep.textContent = players[0].move;
		},500)
		intervals.push(playerMove);

		moveContainer.appendChild(moveHeader);
		moveContainer.appendChild(moveStep);
		moveContainer.classList.add("playerBoxContainer");

		timerContainer.classList.add("playerBoxContainer");
		timerContainer.appendChild(timeHeader);
		timerContainer.appendChild(timer);
		
		
		playerBoxContainer.appendChild(timerContainer);
		playerBoxContainer.appendChild(moveContainer);

	}
	else
		{
			
			players.map((player,key)=>{
					
					const playerBox = document.createElement("div");
					const activeBox = document.createElement("div");
					activeBox.classList.add("turn-active");
					playerBox.appendChild(activeBox);
					const active = document.getElementsByClassName('turn-active');
					const playerActive = setInterval(()=>{
						if(player.id === playerTurn){
						playerBox.classList.add("turn");
						active[playerTurn].classList.remove("hide");
					}
					else{
						playerBox.classList.remove("turn");
						active[player.id].classList.add("hide");
						
					}
					},100)
					intervals.push(playerActive);
					playerBox.classList.add("playerBoxContainer");
					const playerName = document.createElement("p");
					const playerMoveCount = document.createElement("p");
					playerName.appendChild(document.createTextNode(player.name));
					const playerMove = setInterval(()=>{
					playerMoveCount.textContent = player.score;
					},500)
					intervals.push(playerMove);
		
					playerBox.appendChild(playerName);
					playerBox.appendChild(playerMoveCount);
					playerBoxContainer.appendChild(playerBox);
				})
			}
	playerContainer.appendChild(playerBoxContainer);
	body.appendChild(playerContainer);
}
