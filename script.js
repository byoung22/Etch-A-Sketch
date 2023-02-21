const body = document.querySelector('body');
const container = document.querySelector('#container');
const rows = document.querySelectorAll('.row');
const generateButton = document.querySelector('#generate'); 
const colorButtons = document.querySelectorAll('#color');
let slider = document.getElementById('myRange');
let sliderOutput = document.getElementById('sliderValue');
let color = 'black';

// Updates grid size everytime you slide
sliderOutput.innerHTML = `Grid Size ${slider.value} x ${slider.value}`;
slider.oninput = function() {
    sliderOutput.innerHTML = `Grid Size ${this.value} x ${this.value}`;
}
generateButton.onclick = () => generateGrid(sliderOutput);

let isMouseDown = false;
container.onmousedown = () => isMouseDown = true;
container.onmouseup = () => isMouseDown = false;

const black = document.querySelector('#default');
black.onclick = () => color = 'black';
const eraser = document.querySelector('#eraser');
eraser.onclick = () => color = 'white';
const rainbow = document.querySelector('#rainbow');
rainbow.onclick = () => color = rgbColor();

function colorChange(target) {
    // Making the box permanently change when clicked
    target.addEventListener('click', function() {target.style.cssText = `background-color: ${color};`});
    // Making the box permanently change when dragged
    target.addEventListener('mouseover', function () {if (isMouseDown) {target.style.cssText = `background-color: ${color};`}})
}

function addBlocks(number,parent) {
    for (let i = 0; i < number; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        parent.appendChild(box);
        colorChange(box);
    }
}
function addRows(number) {
    for (let i = 0; i < number; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        addBlocks(number,row);
    }
}

function generateGrid(number) {
    document.getElementById('container').innerHTML = '';
    number = slider.value;
    addRows(number);
}

function rgbColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`; // Collect all to a css color string
}
