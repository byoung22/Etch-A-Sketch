const container = document.querySelector('#container')
function addBlocks(number,parent) {
    for (let i = 0; i < number; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        parent.appendChild(box);
        box.setAttribute('id', `column${i + 1}`);
    }
}
function addRows(number) {
    for (let i = 0; i < number; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        row.setAttribute('id', `row${i + 1}`);
        addBlocks(number,row)
    }
}

addRows(20);