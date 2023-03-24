//Task #1
let inputOperand1 = Number(prompt("Please, enter first operand"));
let inputOperand2 = Number(prompt("Please, enter second operand"));

if (isNaN(inputOperand1) && isNaN(inputOperand2)) {
  alert("Both operands should be numbers");
  inputOperand1 = Number(prompt("Please, enter first operand"));
  inputOperand2 = Number(prompt("Please, enter second operand"));
}

let operationType = prompt("Please, enter operation type");

if (
  operationType !== "/" &&
  operationType !== "*" &&
  operationType !== "-" &&
  operationType !== "+"
) {
  operationType = prompt("You can enter only / * - +");
} else {
  if (operationType === "/") {
    if (inputOperand2 === 0) {
      alert("Division by 0 is not allowed");
    }
    const result = inputOperand1 / inputOperand2;
    alert(`${inputOperand1} ${operationType} ${inputOperand2} = ${result}`);
  }
  if (operationType === "*") {
    const result = inputOperand1 * inputOperand2;
    alert(`${inputOperand1} ${operationType} ${inputOperand2} = ${result}`);
  }
  if (operationType === "-") {
    const result = inputOperand1 - inputOperand2;
    alert(`${inputOperand1} ${operationType} ${inputOperand2} = ${result}`);
  }
  if (operationType === "+") {
    const result = inputOperand1 + inputOperand2;
    alert(`${inputOperand1} ${operationType} ${inputOperand2} = ${result}`);
  }
}
