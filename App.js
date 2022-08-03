const clearBtn = document.querySelector('.clear');


function generateGrid(n) {

    let grid = document.querySelector('.container');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

    for (let i = 0; i < n*n; i++) {
        let square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.classList.add('black');
        });
        clearBtn.addEventListener('click', () => {
            square.classList.remove('black');
        } )
        
    }
}




