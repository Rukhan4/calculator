let firstValue = "";
let secondValue = "";
let currentOperation = null;
let resetScreenChoice = false;
let startCalc = false;


const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operator]');
const equalBtn = document.getElementById('equalBtn')
const clearBtn = document.getElementById('clearBtn')
const deleteBtn = document.getElementById('deleteBtn')
const pointBtn = document.getElementById('pointBtn')
const lastOperationScreen = document.getElementById("lastOperationScreen")
const currentOperationScreen = document.getElementById("currentOperationScreen")

equalBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNumber);
pointBtn.addEventListener('click', placePoint);


// FUNCTIONS TO PERFORM ACCESSORY OPERATIONS //

function resetScreen() {
    currentOperationScreen.textContent = ''
    resetScreenChoice = false;
}

function clear() {
    currentOperationScreen.textContent = "0";
    lastOperationScreen.textContent = "";
    firstValue = "";
    secondValue = "";
    currentOperation = null;
}

function placePoint() {
    if (resetScreenChoice) {
        resetScreen();
    }
    if (currentOperationScreen.textContent === "") {
        currentOperationScreen.textContent = "0";
    }
    if (!currentOperationScreen.textContent.includes('.')) {
        currentOperationScreen.textContent += '.';
    }
}

function deleteNumber() {
    if (currentOperationScreen.textContent.length === 1) {
        currentOperationScreen.textContent = "0";
    } else {
        currentOperationScreen.textContent =
            currentOperationScreen.textContent.toString().slice(0, -1);
        firstValue = currentOperationScreen.textContent;
    }
}

// FUNCTIONS TO PERFORM ARITHMETIC OPERATIONS //

numberBtns.forEach((button) =>
    button.addEventListener('click', () => updateNumber(button.textContent)));

operationBtns.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent)));

function updateNumber(num) {
    if (resetScreenChoice) {
        resetScreen();
    } else if (currentOperationScreen.textContent === "0") {
        currentOperationScreen.textContent = num;
    } else {
        currentOperationScreen.textContent += num;
    }
}

function setOperation(operator) {

    if (currentOperation !== null) {
        calculate();
    }
    firstValue = currentOperationScreen.textContent;
    lastOperationScreen.textContent = `${firstValue} ${operator}`;
    currentOperation = operator;
    resetScreenChoice = true;

}

function calculate() {
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
        alert("Really?");
        clear();
    } else {
        secondValue = currentOperationScreen.textContent;
        let result = operate(currentOperation, firstValue, secondValue);
        currentOperationScreen.textContent = result;
        lastOperationScreen.textContent =
            `${firstValue} ${currentOperation} ${secondValue} = ${result}`;
        firstValue = result;
        currentOperation = null;
    }
}

clear();