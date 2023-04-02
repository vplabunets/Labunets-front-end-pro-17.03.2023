// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

const inputArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Знайти суму та кількість позитивних елементів.
console.log("FOR + IF");
let posElementsSum = 0;
let posElementsQuantity = 0;
let negElementsSum = 0;
let negElementsQuantity = 0;

for (let i = 0; i <= inputArray.length; i += 1) {
  if (inputArray[i] > 0) {
    posElementsSum += inputArray[i];
    posElementsQuantity += 1;
  }
  if (inputArray[i] < 0) {
    negElementsSum += inputArray[i];
    negElementsQuantity += 1;
  }
}
console.log(
  `Sum of ${posElementsQuantity} positive elements of array equals ${posElementsSum}`
);
console.log(
  `Sum of ${negElementsQuantity} negative elements of array equals ${negElementsSum}`
);

posElementsSum = 0;
posElementsQuantity = 0;
negElementsSum = 0;
negElementsQuantity = 0;
let posElementsArray = [];
let negElementsArray = [];

console.log("PUSH + REDUCE");
for (let i = 0; i <= inputArray.length; i += 1) {
  if (inputArray[i] > 0) {
    posElementsArray.push(inputArray[i]);
  }
  if (inputArray[i] < 0) {
    inputArray[i];
    negElementsArray.push(inputArray[i]);
  }
}
posElementsSum = posElementsArray.reduce((sum, elem) => sum + elem, 0);
negElementsSum = negElementsArray.reduce((sum, elem) => sum + elem, 0);
console.log(
  `Sum of ${posElementsArray.length} positive elements of array equals ${posElementsSum}`
);
console.log(
  `Sum of ${negElementsArray.length} negative elements of array equals ${negElementsSum}`
);

console.log("FILTER + REDUCE");
posElementsArray = inputArray.filter((element) => element > 0);
negElementsArray = inputArray.filter((element) => element > 0);
console.log(
  `Sum of ${posElementsArray.length} positive elements of array equals ${posElementsSum}`
);
console.log(
  `Sum of ${negElementsArray.length} negative elements of array equals ${negElementsSum}`
);
