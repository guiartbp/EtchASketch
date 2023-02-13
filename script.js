const container = document.querySelector('#container')
const range = document.getElementById('range')
const grid = document.createElement('div');

function makeGrid(size) {
    grid.setAttribute('id', 'grid');
    container.appendChild(grid)
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-cols', size);
    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement('div')
        cell.innerText = (i);
        grid.appendChild(cell).className = "grid-item"
    }   
}

range.addEventListener('click', () => {
    makeGrid(range.value);
});
makeGrid(range.value)