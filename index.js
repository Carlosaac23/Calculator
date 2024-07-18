function addToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  let operation = document.getElementById('display').value;
  let result = eval(operation);
  document.getElementById('display').value = result;
}
