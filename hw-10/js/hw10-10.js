//Дано натуральне число. Визначити кількість його парних дільників.
//1) for
console.log("FOR");

let naturalNumber = 50;
let evenDivisionsNumber = 0;

for (let i = 1; i <= naturalNumber; i += 1) {
  if (naturalNumber % i === 0 && i % 2 === 0) {
    console.log(i);

    evenDivisionsNumber = evenDivisionsNumber + 1;
  }
}

console.log(
  `Even divisions number of ${naturalNumber} is equal ${evenDivisionsNumber}`
);

//2) while
console.log("WHILE");

naturalNumber = 50;
evenDivisionsNumber = 0;
let number = 1;

while (number <= naturalNumber) {
  if (naturalNumber % number === 0 && number % 2 === 0) {
    console.log(number);
    evenDivisionsNumber = evenDivisionsNumber + 1;
  }
  number += 1;
}

console.log(
  `Even divisions number of ${naturalNumber} is equal ${evenDivisionsNumber}`
);

//3) do while
console.log("DO WHILE");

naturalNumber = 50;
evenDivisionsNumber = 0;
number = 1;

do {
  if (naturalNumber % number === 0 && number % 2 === 0) {
    console.log(number);
    evenDivisionsNumber = evenDivisionsNumber + 1;
  }
  number += 1;
} while (number <= naturalNumber);

console.log(
  `Even divisions number of ${naturalNumber} is equal ${evenDivisionsNumber}`
);
