const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")
const clearBtn = document.querySelector(".all-clear")
const clear = document.querySelector(".clear")
const decimal = document.querySelector(".decimal")
const calculatorScreen = document.querySelector(".calculator-screen")

let prevNumber = ''
let operation = ''
let currentNumber = '0'

// let currentNumber1 = 0

// let num = '20'
// let nom = 10020102
// console.log(num)
//     if(num === '0'){
//         num = num 
//     }else{
//         num = num + nom
// 		console.log(num)
//     }  
// const inputNumber1 = (num) => {
//     if(currentNumber1 === '0'){
//         currentNumber1 = num
//     }else{
//         currentNumber1 += num
// 		console.log(currentNumber1)
//     }  
// }

numbers.forEach((number) => {
    number.addEventListener("click", (e) =>{
        inputNumber(e.target.value)
        updateScreen(currentNumber)
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (e) =>{
        inputOperator(e.target.value)
    })
})   

decimal.addEventListener("click", (e) => {
    inputNumber(e.target.value)
    updateScreen(currentNumber)
})

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

clear.addEventListener("click", () => {
    clearInputs()
    updateScreen(currentNumber)
})

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }  
}

const inputOperator = (operator) => {
    if(operation === ''){
        prevNumber = currentNumber
    }
    operation = operator
    currentNumber = '0'
}

// const clearInputs = () => {
//     prevNumber = ''
//     operation = ''
//     currentNumber = '0'
// }

const clearInputs = () => {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1)
}

const clearAll = () => {
    prevNumber = ''
    operation = ''
    currentNumber = '0'  
    // updateScreen()
}

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const calculate = () => {
    let result = ''
    switch (operation) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        case "%":
            result = parseFloat(prevNumber) / 100
            break;
        case "Sin":
            result = Math.sin(parseFloat(prevNumber))
            break;
        case "Cos":
            result = Math.cos(parseFloat(prevNumber))
            break;
        case "Tan":
            result = Math.tan(parseFloat(prevNumber))
            break;
        case "Log":
            result = Math.log(parseFloat(prevNumber))
            break;
        case "Ln":
            result = Math.log(parseFloat(prevNumber))
            break;
        case "Sqrt":
            result = Math.sqrt(parseFloat(prevNumber))
            break;
        case "Cbrt":
            result = Math.cbrt(parseFloat(prevNumber))
            break;
        case "Pow":
            result = Math.pow(parseFloat(prevNumber))
            break;
        case "Abs":
            result = Math.abs(parseFloat(prevNumber))
            break;
        case "Floor":
            result = Math.floor(parseFloat(prevNumber))
            break;
        case "Ceil":
            result = Math.ceil(parseFloat(prevNumber))
            break;
        case "Round":
            result = Math.round(parseFloat(prevNumber))
            break;
        default:
            return;
    }
    currentNumber = result
    operation = ''
}



// calculatorScreen.addEventListener("input", (e) => {
//     currentNumber = e.target.value
// }
