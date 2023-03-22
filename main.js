const startButton = document.querySelector('#start')
const allBoxes = document.querySelectorAll('.box')
const winnerColor = document.querySelector('#winnerColor')
const resultButton = document.querySelector('#result')

let luckyColor;
let colorsCollection;
let isGameFinished = false

function generateRandomNumber(start = 0, end = 256) {
    return Math.round(Math.random() * (end - start + 1) + start)
}

function generateRandomColor() {
    return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`
}

function getRandomColorsList() {
    let colorsList = []
    for(let i = 0; i < 6; i++) {
        colorsList.push(generateRandomColor())
    }
    return colorsList
}

function getLuckyColor(colorsList) {
    return colorsList[generateRandomNumber(0, colorsList.length - 1)]
}

function setColorsToBoxes(colorsList) {
    allBoxes.forEach((box, index) => {
        box.style.backgroundColor = colorsList[index]
    })
}

function startGame() {
    resultButton.textContent = 'waiting for your answer'
}

startButton.addEventListener('click', ()=> {
    colorsCollection = getRandomColorsList()
    luckyColor = getLuckyColor(colorsCollection)

    setColorsToBoxes(colorsCollection)

    winnerColor.textContent = luckyColor

    isGameFinished = false

    startGame()
})

allBoxes.forEach((box) => {
    box.addEventListener('click', (e)=> {
        if(!isGameFinished) {
            if(e.target.style.backgroundColor === luckyColor) {
                resultButton.textContent = 'You are right'
            } else {
                resultButton.textContent = 'You are wrong'
            }
        }
        isGameFinished = true
    })
})