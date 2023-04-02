// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const inputArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Знайти мінімальний елемент масиву та його порядковий номер.
console.log("FOR");

let minValue = 0;
for (let i = 0; i <= inputArray.length; i += 1) {
  if (inputArray[i] < minValue) {
    minValue = inputArray[i];
  }
}
const minValueIndex = inputArray.indexOf(minValue);
console.log(
  `Minimal value of array equals ${minValue} and has index ${minValueIndex}`
);

console.log("Math.min");

minValue = Math.min(...inputArray);
console.log(
  `Minimal value of array equals ${minValue} and has index ${inputArray.indexOf(
    minValue
  )}`
);
