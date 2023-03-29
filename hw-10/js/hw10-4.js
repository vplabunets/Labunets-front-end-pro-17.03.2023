//Знайти суму всіх цілих чисел від 1 до 15.

//1) for
console.log("FOR");

let firstNumber = 1;
let lastNumber = 15;
let integerSum = 0;

for (let i = firstNumber; i <= lastNumber; i += 1) {
  integerSum += i;
}
console.log(
  `Integer numbers sum of the range from ${firstNumber} to ${lastNumber} equals ${integerSum}`
);

//2) while
console.log("WHILE");

firstNumber = 1;
lastNumber = 15;
integerSum = 0;
let number = 0;

while (number <= lastNumber) {
  integerSum += number;
  number += 1;
}
console.log(
  `Integer numbers sum of the range from ${firstNumber} to ${lastNumber} equals ${integerSum}`
);

//3) do while
console.log("DO WHILE");

firstNumber = 1;
lastNumber = 15;
integerSum = 0;
number = 0;

do {
  integerSum += number;
  number += 1;
} while (number <= lastNumber);
console.log(
  `Integer numbers sum of the range from ${firstNumber} to ${lastNumber} equals ${integerSum}`
);
