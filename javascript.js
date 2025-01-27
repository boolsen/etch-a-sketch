let container;
let body;
let squareNum = 100;
let modal;
let squareNumInput;

document.addEventListener("DOMContentLoaded", (event) => {
    input = document.querySelector('#squareNum');
    modal = document.querySelector('.modal');
    body = document.querySelector('body');
    squareNumInput = document.querySelector('#square-num')
    generateGrid(squareNum);
})

/* const generateFreshGrid = function () {
    container2.remove();
    squareNum = parseInt(input.value);
    generateGrid();
} */

const toggleModal = function () {
    modal.classList.toggle('modal-open');
}

const openModal = function () {
    toggleModal();
}

const generateFreshGrid = function () {
    let notAboveMax = enforceInputMax(squareNumInput);
    if (notAboveMax === false) {
        return;
    }
    toggleModal();
    squareNum = parseInt(squareNumInput.value);
    container.remove();
    generateGrid(squareNum);
}

const generateGrid = function (num) {
    let row;
    container = document.createElement("div");
    container.classList.toggle('container')
    for (let j = 0; j < num; j++) {
        row = addRowOfSquares(j);
        container.appendChild(row);
    }
    body.appendChild(container);
}

const addRowOfSquares = function (j) {
    let row = document.createElement("div");
    let square;
    row.setAttribute("id", "row" + j);
    row.setAttribute("class", "row");
    for (let i = 0; i < squareNum; i++) {
        square = appendSquareToRow(row, i);
        row.appendChild(square);
    }
    return row;
}

const appendSquareToRow = function (row, i) {
    let square = document.createElement('div');
    square.setAttribute("id", "square" + i);
    square.setAttribute("class", "square");
    square.setAttribute("onmouseenter", "mouseInSquare(this)");
    return square;
}

const mouseInSquare = function (element) {
    /* element.style.backgroundColor = "black"; */
    let randomColor = randomizeColor();
    element.style.backgroundColor = `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`;
}

const enforceInputMax = function (element) {
    let value = parseInt(element.value);
    let max = parseInt(element.max);

    if (value > max) {
        alert(`Choose a number below ${max}`);
        return false;
    }
}

const randomizeColor = function () {
    let red = Math.random() * 256;
    let green = Math.random() * 256;
    let blue = Math.random() * 256;

    return [red,green,blue];
    
}

