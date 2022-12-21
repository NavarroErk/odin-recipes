let color = "Black"
let click = false
let colorPara = document.querySelector(".colorPara")

function renderBoard(size) {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)` 
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div")
        square.setAttribute("class", "gridSquare")
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor = "Lightgray"
        board.insertAdjacentElement("beforeend", square)
    }  
}
renderBoard(16)

let boardSize = document.querySelector("#boardSize")
let boardSizeLabel = document.querySelector("#boardSizeLabel")
boardSize.onmousemove = (e) => updateSizeValue(e.target.value)
function updateSizeValue(value) {
    boardSizeLabel.innerHTML = `Board Size: ${value} x ${value}` 
}

// console.log(boardSize.value);
function changeSize(input) {
    // boardSizeLabel.textContent = `${boardSize.value} x ${boardSize.value}`
    if (input >= 4 && input <= 64) {
        renderBoard(input)
    } else if (input > 64){
        alert("Too many squares. Please choose an amount less than or equal to 64")
    } else if (input < 2) {
        alert("Too few squares. Please choose an amount greater than or equal to 4")
    }
}

function colorSquare() {
    if (click) {
            // "this" refers to whatever square the event listener was added to
    if (color === "Rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color
    }
    }

}

let colorsArr = ["Black", "Blue", "Red", "Green", "Purple", "Pink", "Orange", "Yellow", "Gray"] 
function changeColor(choice) {
    color = choice
    colorPara.textContent = `Color: ${color}`
    if (color == "Lightgray") {
        colorPara.textContent = "Eraser"
    }
}

function randomPicked() {
    randomIndex = Math.floor(Math.random() * colorsArr.length)
    randomColor = colorsArr[randomIndex]
    changeColor(randomColor)
}


let penPara = document.querySelector(".penPara")
function resetBoard() {
    let board = document.querySelector(".board")
    // this below makes 16 cols, each col has width of 1/16th of the container
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = "Lightgray")
    click = false
    penPara.textContent = "Pen: Inactive"
    color = "Black"
    colorPara.textContent = "Color: Black"
}

document.querySelector(".board").addEventListener("click", ()=> {
    click = !click
    if (click) {
    penPara.textContent = "Pen: Active"
    } else {
    penPara.textContent = "Pen: Inactive"
    }
})

