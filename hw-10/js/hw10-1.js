//Вивести на сторінку в один рядок через кому числа від 10 до 20.

//1) for
console.log("FOR");

let firstNumber = 10;
let lastNumber = 20;
let accumulator = "";
let resultString = "";

for (let i = firstNumber; i <= lastNumber; i += 1) {
  accumulator += `${i} `;
  resultString = accumulator.trim().split(" ").join(",");
}

console.log(resultString);

//2) while
console.log("WHILE");
firstNumber = 10;
lastNumber = 20;
accumulator = "";
resultString = "";
let number = firstNumber;

while (number <= lastNumber) {
  accumulator += `${number} `;
  resultString = accumulator.trim().split(" ").join(",");
  number += 1;
}

console.log(resultString);

//3) do while
console.log("DO WHILE");
firstNumber = 10;
lastNumber = 20;
accumulator = "";
resultString = "";
number = firstNumber;

do {
  accumulator += `${number} `;
  resultString = accumulator.trim().split(" ").join(",");
  number += 1;
} while (number <= lastNumber);

console.log(resultString);
