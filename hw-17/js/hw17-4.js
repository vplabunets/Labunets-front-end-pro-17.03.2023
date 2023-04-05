// Створити функцію, яка прибирає з рядка всі символи, які ми передали
// другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo
// wor". Вихідний рядок та символи для видалення задає користувач.

function symbolsDelete(inputString, ...args) {
  let outputString = inputString;
  for (const arg of args) {
    outputString = outputString.replaceAll(arg, "");
  }
  return outputString;
}

const result = symbolsDelete("Hello Mr. Monkey", "e", "o");

console.log(result);
