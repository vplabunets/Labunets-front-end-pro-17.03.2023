class SuperMath {
  obj = {};
  result = 0;

  check(obj) {
    this.obj = obj;
    this.input();
    if (this.input() === "user error") {
      alert("You entered incorrect data, please try again");
    }
    const { x, y, sign } = this.obj;
    if (y === 0 && (sign === "/" || sign === "%")) {
      console.error("Division by 0 forbidden");
      return "Code run with mistake";
    }
    switch (sign) {
      case "+":
        this.result = this.add(x, y);
        break;
      case "-":
        this.result = this.min(x, y);
        break;
      case "*":
        this.result = this.mul(x, y);
        break;
      case "/":
        this.result = this.div(x, y);
        break;
      case "%":
        this.result = this.evdiv(x, y);
        break;
    }
    this.result && alert(this.result);
    return this.result;
  }

  input() {
    if (
      confirm(
        `Do you want to do calculation using object {x:${this.obj.x}, y:${this.obj.y}, sign:${this.obj.sign}} data?`
      )
    ) {
      return;
    }

    let x = +prompt("Please, input X");
    while (isNaN(x)) {
      x = +prompt("X should be Number only");
    }
    this.obj.x = x;

    let y = +prompt("Please, input Y");
    while (isNaN(y)) {
      y = +prompt("Y should be Number only");
    }
    this.obj.y = y;
    let sign = prompt("Please, input sign");

    while (!["+", "-", "*", "/", "%"].includes(sign)) {
      sign = prompt("SIGN should be '+','-','*','/','%'");
    }

    this.obj.sign = sign;

    if (x === null || y === null || sign === null) {
      return "user error";
    }

    return this;
  }
}

SuperMath.prototype.add = function (x, y) {
  return x + y;
};
SuperMath.prototype.min = function (x, y) {
  return x - y;
};
SuperMath.prototype.mul = function (x, y) {
  return x * y;
};
SuperMath.prototype.div = function (x, y) {
  return x / y;
};
SuperMath.prototype.evdiv = function (x, y) {
  return x % y;
};

const calc = new SuperMath();
console.log(calc.check({ x: 10, y: 1000, sign: "-" }));
