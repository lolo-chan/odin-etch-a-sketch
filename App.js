const grid = document.querySelector('.container');
const clear = document.querySelector('button');
const n=16;

for (let j = 0; j < 16; j++){
    let column = document.createElement('div');
    for (let i =0; i < n; i++){
        const square = document.createElement('div');
        column.appendChild(square);
        square.classList.add('square');
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('black');
        });
        clear.addEventListener('click', () => {
            square.classList.remove('black');
        });
    }
    grid.appendChild(column);
}





// document.getElementById('container').appendChild(squares);
