// selections in document
const container = document.querySelector('#container')
const range = document.getElementById('range')
const grid = document.createElement('div');
const gridItem = document.getElementsByClassName('grid-item');
const corePalette = document.getElementById('color');
const colorSelected = document.getElementById('colorSelected');
const colorRainbow = document.getElementById('colorRainbow');
const Eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const gridSize = 500;
const buttons = document.querySelectorAll('button');

let color = 'black'
let selectButton = 'colorSelected'


grid.setAttribute('id', 'grid');
container.appendChild(grid)

function removeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
}

function makeGrid(size) {
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-cols', size);
    let square = size * size;
    for (let i = 0; i < square; i++) {
        let cell = document.createElement('div')
        grid.appendChild(cell).className = "grid-item"
        cell.setAttribute('id', i);

    }   
    let gridSquare = gridSize / size 
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.width = gridSquare + "px"
        gridItem[i].style.height = gridSquare + "px";
    }    
}

function colorRandom() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

}

function changeColor(changeSquare) {
    if (selectButton === 'colorSelected' || selectButton === 'clear' ) {
        gridItem[changeSquare].style.backgroundColor = color;
        console.log(color)    
    } else if (selectButton === 'colorRainbow') {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        gridItem[changeSquare].style.backgroundColor = "#" + randomColor;
        console.log("#" + randomColor)    
        console.log(selectButton)
    } else if (selectButton === 'eraser') {
        gridItem[changeSquare].style.backgroundColor = 'white';
        console.log("white")    
        console.log(selectButton)
    }

}
grid.addEventListener('click', function(e) {
    var selectSquare = e.target 
    color = corePalette.value
    changeColor(selectSquare.id)
});

clear.addEventListener('click', () => {
    removeGrid()
    makeGrid(range.value)
});

range.addEventListener('click', () => {
    removeGrid()
    makeGrid(range.value);
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        selectButton = button.id
    });
  });

makeGrid(range.value)