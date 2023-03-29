//Знайти добуток усіх цілих чисел від 15 до 35.

//1) for
console.log("FOR");

let firstNumber = 15;
let lastNumber = 35;
let product = 1;

for (let i = firstNumber; i <= lastNumber; i += 1) {
  product *= i;
}
console.log(
  `Integer numbers product of range from ${firstNumber} to ${lastNumber} equals ${product}`
);

//2) while
console.log("WHILE");

firstNumber = 15;
lastNumber = 35;
product = 1;
let number = firstNumber;

while (number <= lastNumber) {
  product *= number;
  number += 1;
}
console.log(
  `Integer numbers product of range from ${firstNumber} to ${lastNumber} equals ${product}`
);

//3) do while
console.log("DO WHILE");

firstNumber = 15;
lastNumber = 35;
product = 1;
number = firstNumber;

do {
  product *= number;
  number += 1;
} while (number <= lastNumber);
console.log(
  `Integer numbers product of range from ${firstNumber} to ${lastNumber} equals ${product}`
);
