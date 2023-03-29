//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

//1) for
console.log("FOR");

let firstNumber = 1;
let lastNumber = 500;
let averageArithmetic = 0;
let integerSum = 0;

for (let i = firstNumber; i <= lastNumber; i += 1) {
  integerSum = integerSum + i;
  averageArithmetic = integerSum / lastNumber;
}
console.log(
  `Average arithmetic of interger numbers from 1 to 500 is equal ${averageArithmetic}`
);

//2) while
console.log("WHILE");

firstNumber = 1;
lastNumber = 500;
averageArithmetic = 0;
integerSum = 0;
let number = firstNumber;

while (number <= lastNumber) {
  integerSum = integerSum + number;
  averageArithmetic = integerSum / lastNumber;
  number += 1;
}

console.log(
  `Average arithmetic of interger numbers from 1 to 500 is equal ${averageArithmetic}`
);

//3) do while
console.log("DO WHILE");

firstNumber = 1;
lastNumber = 500;
averageArithmetic = 0;
integerSum = 0;
number = firstNumber;

do {
  integerSum = integerSum + number;
  averageArithmetic = integerSum / lastNumber;
  number += 1;
} while (number <= lastNumber);

console.log(
  `Average arithmetic of interger numbers from 1 to 500 is equal ${averageArithmetic}`
);
