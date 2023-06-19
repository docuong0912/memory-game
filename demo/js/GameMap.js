

//main

function GameMap(){
	let turn = 0;
	const mapContainer = document.createElement("div");
	mapContainer.id="gameContainer";
	const map = document.createElement("div");
	mapContainer.classList.add("gameMap");
	map.classList.add("map")
	mapSize.map((tiles,key)=>{
	const tile = document.createElement("button");
	tile.classList.add("tile");
	if(size == 16){
		tile.classList.add("fourSquare");
	}
	else{
		tile.classList.add("sixSquare");
	}
	tile.setAttribute("key",key);
	const content = document.createTextNode(tiles.value);
	const icon = document.createElement("img");
	icon.src = tiles.assets[tiles.value-1];
	tile.addEventListener("click",(key)=>{


		//flip tile up
		tile.classList.add("active");
		tile.disabled = true;
		turn++;
		// when 2 tiles are flipped
		if(turn == 2){
			
			

			const btn = document.getElementsByTagName("button");
			//disable remaining tile when check
			Array.from(btn).forEach(b=>b.disabled=true)
			const turnCount = setTimeout(()=>{
				const active = document.getElementsByClassName("tile active");
				if (turn>=2) {
					//check if 2 tile are right
					if(mapSize[active[0].getAttribute("key")].value==mapSize[active[1].getAttribute("key")].value){
							players[playerTurn].score++;
				
							active[0].classList.add("bingo");
							active[1].classList.add("bingo");
							
							active[0].style.visibility="hidden";
							active[1].style.visibility="hidden";

						}
					// if not right, flip back
					while(active[0]){
						active[0].classList.remove("active");
					}
					//return check var back to initial
					turn = 0;
					Array.from(btn).forEach(b=>b.disabled=false)
				}
				//player thing
				players[playerTurn].move++;
				playerTurn++;
					if (playerTurn>players.length-1) {
						playerTurn=0;
					}
			},1000);

			
				
		}


	})
	if(isIcon)
	tile.appendChild(icon);
	else
	tile.appendChild(content);
	map.appendChild(tile);
});
	const checkWin = setInterval(()=>{
		const bingos = document.getElementsByClassName("bingo");
		if(bingos.length == size ) Result();
	},1000);
	intervals.push(checkWin);
body.insertBefore(mapContainer,document.getElementsByTagName("footer")[0]);
mapContainer.appendChild(map);
}

Menu();






