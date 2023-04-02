// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const inputArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

//Знайти найбільший серед елементів масиву, інші обнулити.

const maxElement = Math.max(...inputArray);

for (let i = 0; i < inputArray.length; i += 1) {
  if (inputArray[i] !== maxElement) {
    inputArray.splice(i, 1, 0);
  }
}

console.log(`Max element of array is ${maxElement}`);
console.log(`Zeroed array: ${inputArray}`);
