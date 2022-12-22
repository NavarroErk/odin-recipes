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

function changeColor(choice) {
    let colorPicker = document.getElementById("colorPicker")
    colorPicker.addEventListener("change", () => {
    console.log(colorPicker.value)
    color = colorPicker.value
    changeColor(color)
})
    color = choice
    if (color == "Lightgray") {
        colorPara.textContent = "Eraser"
    } else if (color == "Rainbow") {
        colorPara.textContent = "Rainbow"
    } else{
        colorPara.textContent = ""
    }
}

function randomPicked() {
    randomIndex = Math.floor(Math.random() * colorsArr.length)
    randomColor = colorsArr[randomIndex]
    changeColor(randomColor)
}


let penPara = document.querySelector(".penPara")
function resetBoard() {
    let container = document.querySelector(".container")
    container.setAttribute("id", "shake")
    setTimeout(() => {
        container.removeAttribute("id", "shake")
    }, 1000);
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = "Lightgray")
    click = false
    penPara.textContent = "Pen: Inactive"
    if (color == "Lightgray") {
        colorPara.textContent = "Eraser"
    } else if (color == "Rainbow") {
        colorPara.textContent = "Rainbow"
    } else {
        colorPara.textContent = ""
    }
}

document.querySelector(".board").addEventListener("click", ()=> {
    click = !click
    if (click) {
    penPara.textContent = "Pen: Active"
    } else {
    penPara.textContent = "Pen: Inactive"
    }
})


