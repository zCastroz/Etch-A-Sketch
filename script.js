let color = '#000';
let rainbow_active = false;
const BG_COLOR = '#eee'
const GRID_DEFAULT = 16;

let squares;

let grid_bar = document.getElementById('set-grid');
grid_bar.value = GRID_DEFAULT;

let grid_number = GRID_DEFAULT;
const grid_size = 425;
document.getElementById('square-grid').style.cssText =
'height:'+ grid_size+'px;' +
'width:'+ grid_size+'px;';
const grid = document.querySelector('#square-grid');


grid_bar.addEventListener('input', () => {
    setTimeout(() => {
        document.getElementById('grid-label')
        .innerHTML = grid_bar.value + 'x' + grid_bar.value;
    }, '60');
});
grid_bar.addEventListener('mouseup', removeGrid);
grid_bar.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        removeGrid();
    }
});



function removeGrid() {
    let columns = grid.querySelectorAll('.column');
    columns.forEach(column => {
        grid.removeChild(column);
    });
    
    setGrid(grid_bar.value);
}


function setGrid(grid_number) {
    for (let i = 0; i < grid_number; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        grid.appendChild(column);
        for (let j = 0; j < grid_number; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width  = grid_size/grid_number - 2 + 'px'
            square.style.height = grid_size/grid_number - 2 + 'px'
            column.appendChild(square);
        }
    }
    updateGrid();
}


function updateGrid() {
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (rainbow_active === true) {
                color = '#' + Math.floor(Math.random()*16777215).toString(16);
            }
            square.style.background = color;
        });
    });
}
    

const color_picker = document.getElementById('color-picker');
const color_mode = document.getElementById('color-mode');
const rainbow_mode = document.getElementById('rainbow-mode');
const eraser_mode = document.getElementById('eraser-mode');

color_picker.addEventListener('input', () => {
    rainbow_active = false;
    color = color_picker.value;

    activeMode(color_mode);
})
color_mode.addEventListener('click', () => {
    rainbow_active = false;
    color = color_picker.value;

    activeMode(color_mode);
});


rainbow_mode.addEventListener('click', () => {
    rainbow_active = true;

    activeMode(rainbow_mode);
});


eraser_mode.addEventListener('click', () => {
    rainbow_active = false;
    color = BG_COLOR;

    activeMode(eraser_mode);
});


document.getElementById('clear')
.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.background = BG_COLOR;
    });
});

const buttons = document.querySelectorAll('.mode-button');
function activeMode(active_button) {
    buttons.forEach(button => {
        button.classList.remove('active-mode');
    });

    active_button.classList.add('active-mode');
}


window.onload = setGrid(grid_number);
