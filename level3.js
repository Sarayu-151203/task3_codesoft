// Reference to the display element
const display = document.getElementById('display');

// Append number to the display
function appendNumber(number) {
    display.value += number;
}

// Append operator to the display
function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
