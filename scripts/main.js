const grid = document.querySelector('#grid');
createGrid(grid, prompt("Enter Grid Size.", 16));

const tileArray = Array.from(document.querySelectorAll(".tile"));
tileArray.forEach(hover => hover.addEventListener('mouseover', hoverColor));


const button = document.querySelector('#button');
button.addEventListener('click', refreshPage)


function createGrid(grid, size) {
	

	grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	createTiles(size);
}

function createTiles(size) {
	for(i = 0; i < (size*size); i++) {

    	const tile = document.createElement('div');
    	tile.className = "tile";

    	grid.appendChild(tile);

	}
}

function hoverColor(e){

	e.target.style.backgroundColor = getRandomRgb();

}

function getRandomRgb() {

  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = num >> 8 & 255;
  let b = num & 255;
  return `rgb(${r}+${g}+${b})`;

}

function refreshPage(){

	window.location.reload();
	
}



