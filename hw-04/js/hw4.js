//Task #1
const inputOperand1 = prompt("Please, enter first operand");
const inputOperand2 = prompt("Please, enter second operand");

if (!inputOperand1 || !inputOperand2) {
  alert("Both operands should be entered, please, reload the page");
} else {
  const inputOperand1Trimmed = inputOperand1.trim();
  const inputOperand2Trimmed = inputOperand2.trim();
  const inputOperand1Numbered =
    inputOperand1Trimmed === "" ? NaN : Number(inputOperand1Trimmed);
  const inputOperand2Numbered =
    inputOperand2Trimmed === "" ? NaN : Number(inputOperand2Trimmed);

  let result = 0;

  if (isNaN(inputOperand1Numbered) || isNaN(inputOperand2Numbered)) {
    alert("Both operands should be numbers, please, reload the page");
  } else {
    let operationType = prompt(
      "Please, enter operation type (only / * - +)"
    ).trim();
    if (operationType === "/") {
      if (inputOperand2Numbered === 0) {
        alert("Division by 0 is not allowed");
      }
      result = inputOperand1Numbered / inputOperand2Numbered;
    }
    if (operationType === "*") {
      result = inputOperand1Numbered * inputOperand2Numbered;
    }
    if (operationType === "-") {
      result = inputOperand1Numbered - inputOperand2Numbered;
    }
    if (operationType === "+") {
      result = inputOperand1Numbered + inputOperand2Numbered;
    }
    if (
      operationType === "/" ||
      operationType === "*" ||
      operationType === "-" ||
      operationType === "+"
    ) {
      if (result !== Infinity) {
        alert(
          `${inputOperand1Numbered} ${operationType} ${inputOperand2Numbered} = ${result}`
        );
      }
    } else alert("Operation type is invalid, please, reload the page");
  }
}
