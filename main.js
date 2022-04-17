let color = 'black';
let click = 'true';

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = numSquares = size * size;
    for(let i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', colorSquare);
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none';
        populateBoard(input);
    } else {
        document.querySelector('.error').style.display = 'flex';
    }
}

function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(newColor) {
    color = newColor;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT') {
        click = !click;
    if (click) {
        document.querySelector('.mode').textContent = "Mode: Drawing";
    }
    else {
        document.querySelector('.mode').textContent = "Mode: Not Drawing";
    }
    }
});