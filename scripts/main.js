const grid = document.querySelector('grid');

for(i = 0; i < 256; i++) {
    const tile = document.createElement('div');
    tile.className = "tile";

    document.getElementById('grid').appendChild(tile);
}


//WIP to get each grid tile to change when hovered over.
function hoverColor(){

}

const tileArray = Array.from(document.querySelectorAll(".tile"))
tileArray.forEach(hover => hover.addEventListener('hover', hoverColor));

