// Вивести таблицю множення на 7.

//1) for
let multiplier = 7;

for (let multiplicand = 1; multiplicand <= 10; multiplicand += 1) {
  let result = multiplicand * multiplier;
  console.log(`${multiplicand} * ${multiplier} = ${result}`);
}

//2) while
multiplier = 7;
let multiplicand = 1;

while (multiplicand <= 10) {
  let result = multiplicand * multiplier;
  console.log(`${multiplicand} * ${multiplier} = ${result}`);
  multiplicand += 1;
}

//3) do while
multiplier = 7;
multiplicand = 1;

do {
  let result = multiplicand * multiplier;
  console.log(`${multiplicand} * ${multiplier} = ${result}`);
  multiplicand += 1;
} while (multiplicand <= 10);
