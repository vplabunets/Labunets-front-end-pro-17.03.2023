// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const inputArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Визначити кількість негативних елементів.

let negElementsQuantity = 0;
let negElementsArray = [];

for (let i = 0; i <= inputArray.length; i += 1) {
  if (inputArray[i] < 0) {
    inputArray[i];
    negElementsArray.push(inputArray[i]);
  }
}

negElementsQuantity = negElementsArray.length;

console.log(
  `There are ${negElementsQuantity} negative elements in input array`
);
