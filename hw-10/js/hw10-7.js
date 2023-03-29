//Вивести суму лише парних чисел в діапазоні від 30 до 80.

//1) for
console.log("FOR");

let evenSum = 0;
let firstNumber = 30;
let lastNumber = 80;

for (let i = firstNumber; i <= lastNumber; i += 1) {
  if (i % 2 === 0) {
    evenSum = evenSum + i;
  }
}
console.log(
  `Sum of even numbers from ${firstNumber} to ${lastNumber} is equal ${evenSum}`
);

//2) while
console.log("WHILE");

evenSum = 0;
firstNumber = 30;
lastNumber = 80;
let number = firstNumber;

while (number <= lastNumber) {
  if (number % 2 === 0) {
    evenSum = evenSum + number;
  }
  number += 1;
}

console.log(
  `Sum of even numbers from ${firstNumber} to ${lastNumber} is equal ${evenSum}`
);

//3) do while
console.log("DO WHILE");

evenSum = 0;
firstNumber = 30;
lastNumber = 80;
number = firstNumber;

do {
  if (number % 2 === 0) {
    evenSum = evenSum + number;
  }
  number += 1;
} while (number <= lastNumber);

console.log(
  `Sum of even numbers from ${firstNumber} to ${lastNumber} is equal ${evenSum}`
);
