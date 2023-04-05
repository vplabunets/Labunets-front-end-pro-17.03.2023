//Створити функцію, яка прибирає з рядка всі символи, які ми передали
// другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo
// wor". Вихідний рядок та символи для видалення задає користувач.

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
