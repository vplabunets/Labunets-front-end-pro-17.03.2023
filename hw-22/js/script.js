(function () {
  function mainFunction(callback) {
    alert(callback.name.charAt(0).toUpperCase() + callback.name.slice(1));
    if (callback.name === "exponentiation") {
      const number = prompt("Enter your number");
      const power = prompt("Enter your power");
      if (isNaN(number) || isNaN(power)) {
        alert("Error. You entered incorrect data. You should use only number");
        return;
      } else if (number === null || power === null) {
        alert("Error. You haven't entered data. Please, try again");
        return;
      }

      return callback(+number, +power);
    }
    const number1 = +prompt("Enter your first number.");
    const number2 = +prompt("Enter your second number.");
    if (
      callback.name === "division" ||
      (callback.name === "modulo" && number2 === 0)
    ) {
      alert("Error. Divisor should not be equals 0. Please, try again.");
      return;
    }
    if (isNaN(number1) || isNaN(number2)) {
      alert("Error. You entered incorrect data. You should use only number.");
      return;
    } else if (number1 === null || number2 === null) {
      alert("Error. You haven't entered data. Please, try again.");
      return;
    }
    return callback(number1, number2);
  }

  function exponentiation(number, power) {
    alert("Exponentiation");
    const result = Math.pow(number, power);
    alert(`${number} in power of ${power} equals ${result}`);
    return result;
  }
  function multiply(number1, number2) {
    const product = number1 * number2;
    alert(`Product of ${number1} and ${number2} equals ${product}`);
    return product;
  }
  function division(number1, number2) {
    const quotient = number1 / number2;
    alert(`Quotient of ${number1} and ${number2} equals ${quotient}`);
    return quotient;
  }
  function modulo(number1, number2) {
    const moduloRes = number1 % number2;
    alert(`Modulo of ${number1} and ${number2} equals ${moduloRes}`);
    return moduloRes;
  }
  mainFunction(exponentiation);
  mainFunction(multiply);
  mainFunction(division);
  mainFunction(modulo);
})();
