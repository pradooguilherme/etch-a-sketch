let numbRows = 8
let numbColumns = 8

function createGrid(numbRows, numbColumns, container) {
    
    for (let i = 0; i < numbRows; i++) {
        
        let lineContainer = document.createElement('div')
        lineContainer.classList.add('line-container')
        
        for (let j = 0; j < numbColumns; j++) {
            
            let gridSquare = document.createElement('div')
            lineContainer.appendChild(gridSquare)
        }
        
        container.appendChild(lineContainer)
    }
}

const divContainer = document.querySelector('.container')
createGrid(numbRows, numbColumns, divContainer)
