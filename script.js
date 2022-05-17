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

equalBtn.addEventListener('click', calculator);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNumber);
pointBtn.addEventListener('click', placePoint);


// FUNCTIONS TO PERFORM ACCESSORY OPERATIONS //
function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false;
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
    }
}

// FUNCTIONS TO PERFORM ARITHMETIC OPERATIONS //

function updateNumber(num) {
    if (currentOperationScreen.textContent === "0" || resetScreenChoice) {
        currentOperationScreen.textContent = num;
    } else {
        currentOperationScreen.textContent += num;
    }
}

numberBtns.forEach((button) =>
    button.addEventListener('click', () => updateNumber(button.textContent)));
