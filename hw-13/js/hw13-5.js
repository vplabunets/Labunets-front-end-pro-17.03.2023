// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const inputArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

//Знайти кількість непарних позитивних і кількість непарних негативних елементів.

let posOddElementsArray = [];
let negOddElementsArray = [];

posOddElementsArray = inputArray.filter(
  (element) => element > 0 && element % 2 !== 0
);
negOddElementsArray = inputArray.filter(
  (element) => element < 0 && element % 2 !== 0
);

const posOddElementsQuantity = posOddElementsArray.length;
const negOddElementsQuantity = negOddElementsArray.length;
console.log(
  `There are ${posOddElementsQuantity} positive odd elements in input array`
);

console.log(
  `There are ${negOddElementsQuantity} negative odd elements in input array`
);
