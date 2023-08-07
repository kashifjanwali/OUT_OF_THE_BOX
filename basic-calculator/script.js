let displayValue = document.getElementById("display");

let addToShow = (value) => {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

const squre = () => {
  let displayValue = document.getElementById("display").value;
  let num = parseFloat(displayValue);
  let sqr = Math.pow(num, 2);
  document.getElementById("display").value = sqr;
}

const cube = () => {
  let displayValue = document.getElementById("display").value;
  let num = parseFloat(displayValue);
  let cube = Math.pow(num, 3);
  document.getElementById("display").value = cube;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}