//Task #1
let operationType = prompt("Please, enter hours quantity");
if (
  operationType !== "add" &&
  operationType !== "sub" &&
  operationType !== "mult" &&
  operationType !== "div"
) {
  operationType = prompt("You can choose only one of: add, sub, mult, div");
}
let inputOperand1 = Number(prompt("Please, enter first operand"));
let inputOperand2 = Number(prompt("Please, enter second operand"));

if (isNaN(inputOperand1) && isNaN(inputOperand2)) {
  alert("Both operands should be numbers");
  inputOperand1 = Number(prompt("Please, enter first operand"));
  inputOperand2 = Number(prompt("Please, enter second operand"));
}

let result;
switch (operationType) {
  case "div":
    if (inputOperand2 === 0) {
      alert("Division by 0 is not allowed");
      break;
    }
    result = inputOperand1 / inputOperand2;
    alert(`${inputOperand1} / ${inputOperand2} = ${result}`);
    break;

  case "mult":
    result = inputOperand1 * inputOperand2;
    alert(`${inputOperand1} * ${inputOperand2} = ${result}`);
    break;

  case "sub":
    result = inputOperand1 - inputOperand2;
    alert(`${inputOperand1} - ${inputOperand2} = ${result}`);
    break;
  case "add":
    result = inputOperand1 + inputOperand2;
    alert(`${inputOperand1} + ${inputOperand2} = ${result}`);
    break;
  default:
    alert("Invalid input data. Please, rerun the app");
}
