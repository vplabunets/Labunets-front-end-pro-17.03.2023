// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Реалізуйте функцію generateKey(length, characters),
// яка повертає рядок випадкових символів із набору characters довжиною length.

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(inputLength, characters) {
  const max = characters.split("").length - 1;
  const min = 0;
  let randomKey = "";

  while (randomKey.length < inputLength) {
    randomKey += characters[Math.floor(Math.random() * (max - min + 1)) + min];
  }

  return randomKey;
}

const key = generateKey(16, characters);
console.log(key);
