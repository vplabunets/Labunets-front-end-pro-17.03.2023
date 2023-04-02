// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const inputArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

//Знайти добуток позитивних і добуток негативних елементів.

const posElementsProduct = inputArray.reduce((sum, element) => {
  if (element > 0) {
    return sum * element;
  }
  return sum;
}, 1);
const negElementsProduct = inputArray.reduce((sum, element) => {
  if (element < 0) {
    return sum * element;
  }
  return sum;
}, 1);

console.log(`Product of positive elements equals ${posElementsProduct}`);
console.log(`Product of negative elements equals ${negElementsProduct}`);
