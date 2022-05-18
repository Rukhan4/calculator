let firstValue = "";
let secondValue = "";
let currentOperation = null;

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

function clear() {
    currentOperationScreen.textContent = "0";
    lastOperationScreen.textContent = "";
    firstValue = "";
    secondValue = "";
    currentOperation = null;
}

function placePoint() {
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
        //firstValue = currentOperationScreen.textContent;
    }
}

// FUNCTIONS TO PERFORM ARITHMETIC OPERATIONS //

numberBtns.forEach((button) =>
    button.addEventListener('click', () => updateNumber(button.textContent)));

operationBtns.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent)));

function updateNumber(num) {
    if (currentOperationScreen.textContent === "0") {
        currentOperationScreen.textContent = num;
    } else if (currentOperationScreen.textContent == firstValue) {
        //console.log('first check');
        currentOperationScreen.textContent = num;
    }
    else {
        currentOperationScreen.textContent += num;
    }
}

function setOperation(operator) {
    if (currentOperation !== null) {
        calculate();
    }
    firstValue = currentOperationScreen.textContent;
    //console.log('second check');
    lastOperationScreen.textContent = `${firstValue} ${operator}`;
    currentOperation = operator;
}

function round(num) {
    return Math.round(num * 1000) / 1000;
}

function calculate() {
    if (currentOperation === '÷' &&
        currentOperationScreen.textContent === '0') {
        alert("Really?");
        clear();
    } else {
        secondValue = currentOperationScreen.textContent;
        let result = round(operate(currentOperation, firstValue, secondValue));
        currentOperationScreen.textContent = result;
        lastOperationScreen.textContent =
            `${firstValue} ${currentOperation} ${secondValue} = ${result}`;
        firstValue = result;
        currentOperation = null;
    }
}

clear();