const clearBtn = document.querySelector('.clear');
let n = 16;
let slider = document.querySelector('.slider');
let textbox = document.querySelector('.textbox');
let sizeDisplay = document.querySelector('.valuedisplay');

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
        });
        
    }
}

generateGrid(n);

slider.addEventListener('click', () => {
    textbox.value = slider.value;
    let slidervalue = slider.value;
    generateGrid(slidervalue);
    sizeDisplay.textContent = `Displaying a ${slidervalue}X${slidervalue} grid.`;
});

textbox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        slider.value = textbox.value;
        let textboxvalue = textbox.value;
        if (textboxvalue <= 100 && textboxvalue > 1 && textboxvalue !== ''){
        generateGrid(textboxvalue);
        sizeDisplay.textContent = `Displaying a ${textboxvalue}X${textboxvalue} grid.`;
        }
        else {
            sizeDisplay.textContent = 'Size must be between 2X2 and 100X100!';
        }
    }
});
