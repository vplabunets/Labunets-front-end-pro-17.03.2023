//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

//1) for
console.log("FOR");

let integerNumber = 729;
let result = null;
for (let i = 2; 3 ** i <= integerNumber; i += 1) {
  result = Math.pow(integerNumber, 1 / i);
  if (result !== 3) {
    result = null;
    continue;
  }
  console.log(
    `Number ${integerNumber} can be obtained by raising 3 to the power of ${i} `
  );
}
if (!result) {
  console.log(
    `Number ${integerNumber} can not be obtained by raising 3 to the any power `
  );
}

// 2) while
console.log("WHILE");

integerNumber = 2187;
result = null;
let number = 1;

while (3 ** number <= integerNumber) {
  result = Math.pow(integerNumber, 1 / number);

  if (result !== 3) {
    result = null;
    number += 1;
    continue;
  } else {
    console.log(
      `Number ${integerNumber} can be obtained by raising 3 to the power of ${number} `
    );
    break;
  }
}

if (!result) {
  console.log(
    `Number ${integerNumber} can not be obtained by raising 3 to the any power `
  );
}

//  3) do while
console.log("DO WHILE");

integerNumber = 6561;
result = null;
number = 1;

do {
  result = Math.pow(integerNumber, 1 / number);
  if (result !== 3) {
    result = null;
    number += 1;
  } else {
    console.log(
      `Number ${integerNumber} can be obtained by raising 3 to the power of ${number} `
    );
    break;
  }
} while (3 ** number <= integerNumber);
if (!result) {
  console.log(
    `Number ${integerNumber} can not be obtained by raising 3 to the any power `
  );
}
