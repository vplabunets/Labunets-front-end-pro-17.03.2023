// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const inputArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Знайти сумму парних позитивних і сумму парних негативних елементів.

const posEvenElementsSum = inputArray.reduce((sum, element) => {
  if (element > 0 && element % 2 === 0) {
    return sum + element;
  }
  return sum;
}, 0);
const negEvenElementsSum = inputArray.reduce((sum, element) => {
  if (element < 0 && element % 2 === 0) {
    return sum + element;
  }
  return sum;
}, 0);

console.log(`Sum of positive even elements equals ${posEvenElementsSum}`);

console.log(`Sum of negative even elements equals ${negEvenElementsSum}`);
