let containers = document.querySelector('.flex-container')
console.log(containers)

for(let i = 0; i < 10; i++){
    let div = document.createElement('div')
    div.classList.add('div-container')
    containers.appendChild(div)
}