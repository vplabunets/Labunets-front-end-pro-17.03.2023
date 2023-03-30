//  Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

//1) for
console.log("FOR");

let firstNumber = 20;
let lastNumber = 30;
let result = "";

for (let i = firstNumber; i <= lastNumber; i += 0.5) {
  result += i + " ";
}
result = result.trim();
console.log(result);

//2) while
console.log("WHILE");

firstNumber = 20;
lastNumber = 30;
result = "";
let number = firstNumber;

while (number <= lastNumber) {
  result += number + " ";
  number += 0.5;
}
result = result.trim();
console.log(result);

//3) do while
console.log("DO WHILE");

firstNumber = 20;
lastNumber = 30;
result = "";
number = firstNumber;

do {
  result += number + " ";
  number += 0.5;
} while (number <= lastNumber);
result = result.trim();

console.log(result);
