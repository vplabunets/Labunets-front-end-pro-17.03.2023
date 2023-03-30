//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

//1) for
console.log("FOR");

let integerNumber = 50;
let firstNumber = 1;
let lastNumber = 100;

for (let i = firstNumber; i <= lastNumber; i += 1) {
  if (i ** 2 <= integerNumber) {
    console.log(i);
  }
}

// 2) while
console.log("WHILE");

integerNumber = 50;
firstNumber = 1;
lastNumber = 100;
let number = firstNumber;

while (number <= lastNumber) {
  if (number ** 2 <= integerNumber) {
    console.log(number);
  }
  number += 1;
}

//3) do while
console.log("DO WHILE");

integerNumber = 50;
firstNumber = 1;
lastNumber = 100;
number = firstNumber;

do {
  if (number ** 2 <= integerNumber) {
    console.log(number);
  }
  number += 1;
} while (number <= lastNumber);
