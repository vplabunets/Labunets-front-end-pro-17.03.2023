//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//1) for
console.log("FOR");

let naturalNumber = 30;

for (let i = 1; i <= naturalNumber; i += 1) {
  if (naturalNumber % i === 0) {
    console.log(`${naturalNumber} divides by ${i} without remainder`);
  }
}

// 2) while
console.log("WHILE");

naturalNumber = 30;
let number = 1;

while (number <= naturalNumber) {
  if (naturalNumber % number === 0) {
    console.log(`${naturalNumber} divides by ${number} without remainder`);
  }
  number += 1;
}

//3) do while
console.log("DO WHILE");

naturalNumber = 30;
number = 1;

do {
  if (naturalNumber % number === 0) {
    console.log(`${naturalNumber} divides by ${number} without remainder`);
  }
  number += 1;
} while (number <= naturalNumber);
