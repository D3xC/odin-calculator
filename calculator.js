let result = 0;
let operation = [];
let operators = ["+", "-", "*", "/"];
let num1 = 0;
let num2 = 0;
const resultDisplay = document.querySelector(".result");
const tallyDisplay = document.querySelector(".tally");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {

}

function displayResult() {

}

function clearDisplay() {
  result = 0;
  operation = [];
  resultDisplay.textContent = result;
  tallyDisplay.textContent = operation;
}

function updateDisplay(e) {
  operation.push(e.target.innerText);
  console.log(operation);
  tallyDisplay.innerText = operation.join('');
}

function calculate() { }

function setKeys() {
  const clearButton = document.querySelector("button#clear");
  const deleteButton = document.querySelector("button#delete");
  const digits = document.querySelectorAll("button.digit");
  const operators = document.querySelectorAll("button.operator");
  const result = document.querySelector("button#result");
  clearButton.addEventListener("click", clearDisplay);
  deleteButton.addEventListener("click", () => {
    operation.pop();
    tallyDisplay.innerText = operation.join('');
  });
  digits.forEach((button) => {
    button.addEventListener("click", updateDisplay);
  });
  operators.forEach((button) => {
    button.addEventListener("click", updateDisplay);
  });
  result.addEventListener("click", calculate);
}

clearDisplay();
setKeys();