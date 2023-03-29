//Надрукувати повну таблицю множення від 1 до 10.

//1) for
console.log("FOR");

let startMultiplier = 1;
let lastMultiplier = 10;
let startMultiplicand = 1;
let lastMultiplicand = 10;

for (let j = startMultiplicand; j <= lastMultiplicand; j += 1) {
  for (let i = startMultiplier; i <= lastMultiplier; i += 1) {
    let result = i * j;

    console.log(`${j} * ${i} = ${result}`);
    if (i === 10) {
      console.log("------------");
    }
  }
}

//2) while
console.log("WHILE");

startMultiplier = 1;
lastMultiplier = 10;
startMultiplicand = 1;
lastMultiplicand = 10;
let i = startMultiplier;
let j = startMultiplicand;

while (j <= lastMultiplicand) {
  while (i <= lastMultiplier) {
    let result = i * j;
    console.log(`${j} * ${i} = ${result}`);
    i += 1;
  }
  console.log("------------");
  i = 1;
  j += 1;
}

// 3) do while
console.log("DO WHILE");

startMultiplier = 1;
lastMultiplier = 10;
startMultiplicand = 1;
lastMultiplicand = 10;
i = startMultiplier;
j = startMultiplicand;

do {
  do {
    let result = i * j;
    console.log(`${j} * ${i} = ${result}`);
    i += 1;
  } while (i <= lastMultiplier);
  console.log("------------");
  i = 1;
  j += 1;
} while (j <= lastMultiplicand);
