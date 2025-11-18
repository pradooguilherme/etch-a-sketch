
function createGrid(numb) {

    let cellDim = 960 / numb;
    const gridContainer = document.querySelector('.flex-grid')

    for (let i = 1; i <= numb * numb; i++) {

        let gridElement = document.createElement('div');
        let opacity = 1

        gridElement.style.minWidth = `${cellDim}px`;
        gridElement.style.backgroundColor = "white"

        gridElement.addEventListener('mouseenter', () => {

            if (!gridElement.style.background) {
                gridElement.style.background = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`
            }

            if (opacity > 0) {
                opacity -= 0.1
                gridElement.style.opacity = `${opacity}`
            }
        })
        gridContainer.appendChild(gridElement)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function removeGrid(element) {
    let child = divContainer.lastElementChild

    while (child) {
        element.removeChild(child)
        child = element.lastElementChild
    }
}
function getNewGridSize() {
    let size = prompt('Insert the new size of the grid')

    while (size > 100) {
        size = prompt('Insert the new size of the grid:')
    }

    return size
}

let numb = 16
const divContainer = document.querySelector('.flex-grid')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    removeGrid(divContainer)
    createGrid(getNewGridSize())
})

createGrid(numb)
