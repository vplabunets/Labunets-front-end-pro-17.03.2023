// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

function createTwoDimArray(internalArrayLength, mainArrayLength) {
  const array = [];
  for (let i = 0; i < mainArrayLength; i += 1) {
    array[i] = [];

    for (let j = 0; j < internalArrayLength; j += 1) {
      array[i][j] = prompt(`Please, enter ${j + 1} element ${i + 1} array`);
    }
  }
  return array;
}

console.log(createTwoDimArray(2, 4));
