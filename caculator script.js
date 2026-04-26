const display = document.getElementById("display");
let memory = 0;

function append(value) {
  if (display.value === "0") display.value = "";
  display.value += value;
}

function clearDisplay() {
  display.value = "0";
}

function clearEntry() {
  display.value = "0";
}

function deleteChar() {
  display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function sqrt() {
  display.value = Math.sqrt(parseFloat(display.value));
}

function square() {
  display.value = Math.pow(parseFloat(display.value), 2);
}

function inverse() {
  display.value = 1 / parseFloat(display.value);
}

function toggleSign() {
  display.value = parseFloat(display.value) * -1;
}

// Memory functions
function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  display.value = memory;
}

function memoryAdd() {
  memory += parseFloat(display.value);
}

function memorySubtract() {
  memory -= parseFloat(display.value);
}

function memoryStore() {
  memory = parseFloat(display.value);
}
