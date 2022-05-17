import { operate } from './ops.js';

// console.log(operate('-', 3, 5));
// console.log(operate('*', 3, 5));
// console.log(operate('/', 3, 5));
// console.log(operate('+', 3, 5));

let firstValue = "";
let secondValue = "";
let currentOperation = null;
let resetScreenChoice = false;

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.getElementById('equalsBtn')
const clearBtn = document.getElementById('clearBtn')
const deleteBtn = document.getElementById('deleteBtn')
const pointBtn = document.getElementById('pointBtn')
const lastOperationScreen = document.getElementById("lastOperationScreen")
const currentOperationScreen = document.getElementById("currentOperationScreen")

function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}

function updateNumber(num) {
    if (currentOperationScreen.textContent === "0" || resetScreenChoice) {
        resetScreen()
    }
    currentOperationScreen.textContent += num;
}

function clear() {
    currentOperationScreen.textContent = "0"
    lastOperationScreen.textContent = ""
    firstValue = ""
    secondValue = ""
    currentOperation = null
}

function placePoint() {
    if (resetScreenChoice) {
        resetScreen()
    }
    if (currentOperationScreen.textContent === "") {
        currentOperationScreen.textContent = "0"
    }
    if (!currentOperationScreen.textContent.includes('.')) {
        currentOperationScreen.textContent += '.'
    }
}

function deleteNumber() {
    currentOperationScreen.textContent =
        currentOperationScreen.textContent.toString().slice(0, -1)
}