// selections in document
const container = document.querySelector('#container')
const range = document.getElementById('range')
const grid = document.createElement('div');
const gridItem = document.getElementsByClassName('grid-item');
const corePalette = document.getElementById('color');
const colorSelected = document.getElementById('colorSelected');
const colorRainbow = document.getElementById('colorRainbow');
const colorTen = document.getElementById('colorTen');
const Eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const gridSize = 500;
const buttons = document.querySelectorAll('button');
const inputSize = document.getElementById('inputSize');
const colorP = document.getElementById('colorP');


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
    inputSize.innerText = `${size} x ${size}`
}

function colorRandom() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    color.value = randomColor;
}

function changeColor(changeSquare) {
    if (selectButton === 'colorSelected' || selectButton === 'clear' ) {
        gridItem[changeSquare].style.backgroundColor = color; 
        colorP.innerText = `${color}`     
    } else if (selectButton === 'colorRainbow') {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        gridItem[changeSquare].style.backgroundColor = "#" + randomColor;
        colorP.innerText = `#${randomColor}`     

    } else if (selectButton === 'colorTen') {
        gridItem[changeSquare].style.backgroundColor = "#" + randomColor;
        colorP.innerText = `#${randomColor}`     

    }else if (selectButton === 'eraser') {
        gridItem[changeSquare].style.backgroundColor = 'white';
        colorP.innerText = `#FFFFFF`     
    }

}
grid.addEventListener('mouseover', function(e) {
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
    
    button.addEventListener('click', function () {
        selectButton = button.id
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        if (button.id === 'clear'){
            this.classList.remove('active');
            buttons[0].classList.add('active')
        }
    });
    
});


makeGrid(range.value)