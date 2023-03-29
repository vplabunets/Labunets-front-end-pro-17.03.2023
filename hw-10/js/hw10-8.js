//Вивести всі числа в діапазоні від 100 до 200 кратні 3.

//1) for
console.log("FOR");

let multipleOfThreeSum = 0;
let firstNumber = 100;
let lastNumber = 200;

for (let i = firstNumber; i <= lastNumber; i += 1) {
  if (i % 3 === 0) {
    console.log(i);
    multipleOfThreeSum = multipleOfThreeSum + i;
  }
}

//2) while
console.log("WHILE");

multipleOfThreeSum = 0;
firstNumber = 100;
lastNumber = 200;
let number = firstNumber;

while (number <= lastNumber) {
  if (number % 3 === 0) {
    console.log(number);
    multipleOfThreeSum = multipleOfThreeSum + number;
  }
  number += 1;
}

//3) do while
console.log("DO WHILE");

multipleOfThreeSum = 0;
firstNumber = 100;
lastNumber = 200;
number = firstNumber;

do {
  if (number % 3 === 0) {
    console.log(number);
    multipleOfThreeSum = multipleOfThreeSum + number;
  }
  number += 1;
} while (number <= lastNumber);
