const container = document.querySelector('#container');
let isMouseDown = false;
container.onmousedown = () => isMouseDown = true;
container.onmouseup = () => isMouseDown = false;

function colorChange(target) {
    // Making the box change color temporarily when hovered
    target.addEventListener('mouseover', function() {target.classList.add('class', 'hoverin')});
    target.addEventListener('mouseout', function() {target.classList.remove('class', 'hoverin')});
    // Making the box permanently change when clicked
    target.addEventListener('click', function() {target.setAttribute('id','clicked')});
    // Making the box permanently change when dragged
    target.addEventListener('mouseover', function () {if (isMouseDown) {target.setAttribute('id','clicked')}})
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

// Add a square grid
addRows(20);