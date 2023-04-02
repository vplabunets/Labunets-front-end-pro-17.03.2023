// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const inputArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Знайти кількість парних позитивних і кількість парних негативних елементів.

let posEvenElementsArray = [];
let negEvenElementsArray = [];

for (let element of inputArray) {
  if (element > 0 && element % 2 === 0) {
    posEvenElementsArray.push(element);
  }
}
negEvenElementsArray = inputArray.filter(
  (element) => element < 0 && element % 2 === 0
);

const posEvenElementsQuantity = posEvenElementsArray.length;
const negEvenElementsQuantity = negEvenElementsArray.length;
console.log(
  `There are ${posEvenElementsQuantity} positive even elements in input array`
);

console.log(
  `There are ${negEvenElementsQuantity} negative even elements in input array`
);
