
function createPlayer(){
	let players = [];
	for (var i = 0; i < playerNum; i++) {
		const player = new Player(i);
		players.push(player);
	}
	return players;
}

//tile constructor
function Tile(key,value){
	this.key = key;
	this.value = value;
	this.assets=[
		"assets/anchor.svg",
		"assets/bug.svg",
		"assets/car.svg",
		"assets/flask.svg",
		"assets/futbol.svg",
		"assets/hand-spock.svg",
		"assets/lira-sign.svg",
		"assets/moon.svg",
		"assets/snowflake.svg",
		"assets/sun.svg",
	]
}

//shuffle function
function shuffle(map){
		for (let i = map.length-1; i >0; i--) {
			let j = Math.floor(Math.random()*i);
			let temp;
			temp = map[i];
			map[i] = map[j];
			map[j] = temp;

		}
		return map;
}
//create map base on size
function createMap(size){
	const map =[];
	var value = 1;
	for (var i = 0; i < size; i++) {
		if(isIcon){
			map.push(new Tile(i,value));
			if(i%2!=0)
			value++;
		if(value>10) value = 1;
		}
		else{
			map.push(new Tile(i,value));
			if(i%2!=0)
			value++;
		}
		
	}
	shuffle(map);
	return map;
}
//create map by size
var mapSize;
const body = document.body;
function Menu(){
	const menuOuterContainer = document.createElement("div");
	const logo = document.createElement("h1");
	logo.appendChild(document.createTextNode("memory"));
	menuOuterContainer.id="menu";
	const menuInnerContainer = document.createElement("div");
	const themeContainer = document.createElement("div");
	const numberPContainer = document.createElement("div");
	const gridSizeContainer = document.createElement("div");
	//start game btn
	const startBtn = document.createElement("button");
	startBtn.classList.add("start-btn");
	startBtn.appendChild(document.createTextNode("Start Game"));
	startBtn.disabled = true;
	startBtn.addEventListener("click",()=>{

		menuOuterContainer.classList.add("hide");
		mapSize = createMap(size);
		players = createPlayer(playerNum);
		Header();
		GameMap();
		displayPlayer();
		createPlayer();
	})


	//theme section
	const themeHeader = document.createElement("h3");
	const themeText = document.createTextNode("Select theme");
	const themeBtnContainer = document.createElement("div");
	themeHeader.appendChild(themeText);
	const numberTheme = document.createElement("button");
	numberTheme.appendChild(document.createTextNode("Numbers"));
	const iconTheme = document.createElement("button");
	iconTheme.appendChild(document.createTextNode("Icons"));

	numberTheme.classList.add("theme-btn");
	iconTheme.classList.add("theme-btn");
	numberTheme.addEventListener("click",()=>Selects("theme-btn",numberTheme));
	iconTheme.addEventListener("click",()=>Selects("theme-btn",iconTheme));
	themeBtnContainer.appendChild(numberTheme);
	themeBtnContainer.appendChild(iconTheme);
	themeContainer.appendChild(themeHeader);
	themeContainer.appendChild(themeBtnContainer);

	//number of player section
	const playerHeader = document.createElement("h3");
	playerHeader.appendChild(document.createTextNode("Number of players"));
	const playerBtnContainer = document.createElement("div");
	for (var i = 0; i < 4; i++) {
		const button = document.createElement("button");
		button.classList.add("player-btn");
		button.addEventListener("click",()=>Selects("player-btn",button));
		button.appendChild(document.createTextNode(i+1));
		
		playerBtnContainer.appendChild(button);
	}
	numberPContainer.appendChild(playerHeader);
	numberPContainer.appendChild(playerBtnContainer);

	// grid size section
	const gridHeader = document.createElement("h3");
	gridHeader.appendChild(document.createTextNode("Grid Size"));
	const gridBtnContainer = document.createElement("div");
	const fourSquare = document.createElement("button");
	const sixSquare = document.createElement("button");
	fourSquare.classList.add("grid-btn");
	sixSquare.classList.add("grid-btn");
	fourSquare.addEventListener("click",()=>Selects("grid-btn",fourSquare));
	sixSquare.addEventListener("click",()=>Selects("grid-btn",sixSquare));
	fourSquare.appendChild(document.createTextNode("4x4"));
	sixSquare.appendChild(document.createTextNode("6x6"));
	gridBtnContainer.appendChild(fourSquare);
	gridBtnContainer.appendChild(sixSquare);
	gridSizeContainer.appendChild(gridHeader);
	gridSizeContainer.appendChild(gridBtnContainer);



	//add style
	menuOuterContainer.classList.add("menuOuterContainer");
	menuInnerContainer.classList.add("menuInnerContainer");
	themeContainer.classList.add("selector");
	numberPContainer.classList.add("selector");
	gridSizeContainer.classList.add("selector");
	themeBtnContainer.classList.add("btnContainer");
	gridBtnContainer.classList.add("btnContainer");
	playerBtnContainer.classList.add("btnContainer");
	playerBtnContainer.classList.add("playerNumBtn");
	logo.style.textAlign = "center";
	logo.style.color = "white";
	menuOuterContainer.appendChild(logo);
	menuInnerContainer.appendChild(themeContainer);
	menuInnerContainer.appendChild(numberPContainer);
	menuInnerContainer.appendChild(gridSizeContainer);
	menuOuterContainer.appendChild(menuInnerContainer)
	menuInnerContainer.appendChild(startBtn);

	body.appendChild(menuOuterContainer);
	function Selects(button,index){
		const btn = document.getElementsByClassName(button);
		for (var i = 0; i < btn.length; i++) {
			btn[i].classList.remove("active");
		}
		index.classList.add("active");
		if(button == "theme-btn"){
			if(index.textContent == "Numbers"){
				isIcon=false;
			}
			else isIcon=true
		}
		if(button == "grid-btn")
		{
			if(index.textContent=="4x4"){
				size = 16;
				
			}
			else{ 
				size = 36;
				
			}
		}
		if(button == "player-btn"){
			playerNum = eval(index.textContent);
			
		}
		if(size==undefined||playerNum==undefined||isIcon==undefined){
		startBtn.disabled = true;
		}
		else startBtn.disabled = false;

	}

}



