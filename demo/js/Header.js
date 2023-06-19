function Header(){
	//for mobile
	const menuBtn = document.createElement("button");

	menuBtn.classList.add("menuBtn");
	menuBtn.appendChild(document.createTextNode("Menu"));
	mobileOutterBtnContainer = document.createElement("div");
	mobileInnerBtnContainer = document.createElement("div");
	mobileOutterBtnContainer.classList.add("resultOutterContainer","mobileMenu");
	mobileInnerBtnContainer.classList.add("mobileInnerBtnContainer");
	const mobileRestartBtn = document.createElement("button");
	const mobileNewgameBtn = document.createElement("button");
	const mobileResumeBtn = document.createElement("button");
	mobileRestartBtn.appendChild(document.createTextNode("Restart"));
	mobileNewgameBtn.appendChild(document.createTextNode("New Game"));
	mobileResumeBtn.appendChild(document.createTextNode("Resume Game"));
	mobileRestartBtn.classList.add("mobileBtn");
	mobileNewgameBtn.classList.add("mobileBtn");
	mobileResumeBtn.classList.add("mobileBtn");
	mobileInnerBtnContainer.appendChild(mobileRestartBtn);
	mobileInnerBtnContainer.appendChild(mobileNewgameBtn);
	mobileInnerBtnContainer.appendChild(mobileResumeBtn);
	mobileOutterBtnContainer.appendChild(mobileInnerBtnContainer);
		menuBtn.addEventListener("click",()=>{
		mobileOutterBtnContainer.style.visibility = "visible";
		
		
	})
	mobileResumeBtn.addEventListener("click",()=>{
		mobileOutterBtnContainer.style.visibility = "hidden";
		
	})
	mobileNewgameBtn.addEventListener("click",newGame);
	mobileRestartBtn.addEventListener("click",restart);
	//for desktop
	const headerContainer = document.createElement("header");
	headerContainer.appendChild(menuBtn);
	headerContainer.appendChild(mobileOutterBtnContainer);
	const logo = document.createElement("h1");
	logo.appendChild(document.createTextNode("memory"));
	const headerBtnContainer = document.createElement("div");
	headerBtnContainer.classList.add("headerBtnContainer");
	const restartBtn = document.createElement("button");
	const newGameBtn = document.createElement("button");
	restartBtn.appendChild(document.createTextNode("Restart"));
	newGameBtn.appendChild(document.createTextNode("New Game"));
	restartBtn.addEventListener("click",restart);
	newGameBtn.addEventListener("click",newGame);

	headerBtnContainer.appendChild(restartBtn);
	headerBtnContainer.appendChild(newGameBtn);
	headerContainer.appendChild(logo);
	headerContainer.appendChild(headerBtnContainer);
	
	body.appendChild(headerContainer);
}
function restart(){
	mapSize = createMap(size);
		body.removeChild(document.getElementById("gameContainer"));
		body.removeChild(document.getElementsByTagName('footer')[0]);
		clearInterval(time);
		GameMap();
		displayPlayer();
		players.map(player=>{
			player.move = 0;
			player.score = 0;
			
		})
		playerTurn = 0;
		sec=0;
		min=0;
	const result = document.getElementById("result");
	if(result) body.removeChild(result);
}
function newGame(){
		body.removeChild(document.getElementById("gameContainer"));
		body.removeChild(document.getElementsByTagName('header')[0]);
		body.removeChild(document.getElementsByTagName('footer')[0]);
		intervals.forEach(time=>clearInterval(time));
		timeouts.forEach(time=>clearTimeout(time));
		players=[];
		const menu = document.getElementById("menu");
		sec =0;
		min = 0;
		playerTurn = 0;
		menu.classList.remove("hide");
		const result = document.getElementById("result");
		if(result) body.removeChild(result);
}