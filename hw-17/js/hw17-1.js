// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const inputArray = [1, 2, 3, 4, "a", "b", "c", 500];

function calculateArithmeticMean(array) {
  return (
    array.reduce((sum, number) => {
      if (!isNaN(number)) {
        return sum + number;
      }

      return sum;
    }, 0) / array.filter((element) => !isNaN(element)).length
  );
}

const arithmeticMean = calculateArithmeticMean(inputArray);
console.log(
  `Arithmetic mean of numbers from array [${inputArray}] equals ${arithmeticMean}`
);
