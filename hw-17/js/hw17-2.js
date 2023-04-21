// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і
// y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь
// ).Вивести результат математичної дії, вказаної в змінній znak.Обидва
// числа і знак виходять від користувача.
function doMath(x, sign, y) {
  if (isNaN(x) || isNaN(y)) {
    return "Both operands must be numbers";
  }
  if (y === 0 && sign === "/") {
    return "Division by 0 is not allowed";
  }

  switch (sign) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "%":
      return x % y;
    case "^":
      return Math.pow(x, y);
    default:
      return "Sign is not correct";
  }
}

const result = doMath(2, "^", 4);

console.log(result);
