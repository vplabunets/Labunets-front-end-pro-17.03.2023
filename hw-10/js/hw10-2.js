//Вивести квадрати чисел від 10 до 20

//1) for
console.log("FOR");

let firstNumber = 10;
let lastNumber = 20;
let powerValue = 2;
let result = 0;

for (let i = firstNumber; i <= lastNumber; i += 1) {
  result = i ** powerValue;
  console.log(`${i} raised to the power of ${powerValue} is ${result}`);
}

//2) while
console.log("WHILE");

firstNumber = 10;
lastNumber = 20;
powerValue = 2;
result = 0;
let number = firstNumber;

while (number <= lastNumber) {
  result = number ** powerValue;
  console.log(`${number} raised to the power of ${powerValue} is ${result}`);
  number = number + 1;
}

//3) do while
console.log("DO WHILE");

firstNumber = 10;
lastNumber = 20;
powerValue = 2;
result = 0;
number = firstNumber;

do {
  result = number ** powerValue;
  console.log(`${number} raised to the power of ${powerValue} is ${result}`);
  number = number + 1;
} while (number <= lastNumber);
