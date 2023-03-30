// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1себе). і

//1) for
console.log("FOR");

let integerNumber = 113;
let firstNumber = 1;
let lastNumber = integerNumber;
let result = "";
let resultArray = [];

for (let i = firstNumber + 1; i <= lastNumber; i += 1) {
  if (integerNumber % i === 0) {
    result += i + " ";
    resultArray = result.trim().split(" ");
  }
}

if (resultArray.length === 1) {
  console.log(`Number ${integerNumber} is prime`);
} else console.log(`Number ${integerNumber} is not prime`);

// 2) while
console.log("WHILE");

integerNumber = 113;
firstNumber = 1;
lastNumber = integerNumber;
result = "";
resultArray = [];
let number = firstNumber + 1;

while (number <= lastNumber) {
  if (integerNumber % number === 0) {
    result += number + " ";
    resultArray = result.trim().split(" ");
  }
  number += 1;
}

if (resultArray.length === 1) {
  console.log(`Number ${integerNumber} is prime`);
} else console.log(`Number ${integerNumber} is not prime`);

//  3) do while
console.log("DO WHILE");

integerNumber = 113;
firstNumber = 1;
lastNumber = integerNumber;
result = "";
resultArray = [];
number = firstNumber + 1;

do {
  if (integerNumber % number === 0) {
    result += number + " ";
    resultArray = result.trim().split(" ");
  }
  number += 1;
} while (number <= lastNumber);
if (resultArray.length === 1) {
  console.log(`Number ${integerNumber} is prime`);
} else console.log(`Number ${integerNumber} is not prime`);
