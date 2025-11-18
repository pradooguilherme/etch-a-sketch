let numbRows = 10
let numbColumns = 10

function createGrid(numbRows, numbColumns, container) {
    
    for (let i = 0; i < numbRows; i++) {
        
        let lineContainer = document.createElement('div')
        lineContainer.classList.add('line-container')
        
        for (let j = 0; j < numbColumns; j++) {
            
            let gridSquare = document.createElement('div')
            lineContainer.appendChild(gridSquare)

            gridSquare.addEventListener("mouseenter", () => {
                gridSquare.style.opacity = Number(gridSquare.style.opacity) + 0.1
            })
        }
        container.appendChild(lineContainer)
    }
}

const divContainer = document.querySelector('.flex-grid')
createGrid(numbRows, numbColumns, divContainer)
