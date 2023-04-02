// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const inputArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Знайти максимальний елемент масиву та його порядковий номер.
console.log("FOR");
let maxValue = 0;
for (let i = 0; i <= inputArray.length; i += 1) {
  if (inputArray[i] > maxValue) {
    maxValue = inputArray[i];
  }
}
const maxValueIndex = inputArray.indexOf(maxValue);
console.log(
  `Maximum value of array equals ${maxValue} and has index ${maxValueIndex}`
);
console.log("Math.min");
maxValue = Math.max(...inputArray);

console.log(
  `Maximum value of array equals ${maxValue} and has index ${maxValueIndex}`
);
