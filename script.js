let color = '#000';
let rainbow_mode = false;
const BG_COLOR = '#eee'

let grid_number = 16;
const grid_size = 450;
document.getElementById('square-grid').style.cssText =
    'height:'+ grid_size+'px;' +
    'width:'+ grid_size+'px;';
const grid = document.querySelector('#square-grid');


function setGrid(grid_number) {
    for (let i = 0; i < grid_number; i++) {
        let column = document.createElement('div');
        grid.appendChild(column);
        for (let j = 0; j < grid_number; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width  = grid_size/grid_number - 2 + 'px'
            square.style.height = grid_size/grid_number - 2 + 'px'
            column.appendChild(square);
        }
    }
}


const color_picker = document.getElementById('color-picker');
color_picker.addEventListener('input', () => {
    rainbow_mode = false;
    color = color_picker.value;
})
document.getElementById('color-mode')
.addEventListener('click', () => {
    rainbow_mode = false;
    color = color_picker.value;
});


document.getElementById('rainbow-mode')
.addEventListener('click', () => {
    rainbow_mode = true;
});


document.getElementById('eraser-mode')
.addEventListener('click', () => {
    rainbow_mode = false;
    color = BG_COLOR;
});


document.getElementById('clear')
.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.background = BG_COLOR;
    });

});


window.onload = setGrid(grid_number);


let squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (rainbow_mode === true) {
            color = '#' + Math.floor(Math.random()*16777215).toString(16);
        }
        square.style.background = color;
    });
});
