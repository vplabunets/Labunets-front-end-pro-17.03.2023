// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

// This array was added by user
const userArray = [
  "Odesa",
  "Kyiv",
  "Kherson",
  "Avdiivka",
  "Mariupol",
  "Izum",
  "Kupiansk",
];

// Відсортувати масив за зростанням.
const ascendingUserArray = [...userArray].sort();
console.log("Ascending array with sort() method", ascendingUserArray);

const ascendingUserArrayLocal = [...userArray].sort((a, b) =>
  a.localeCompare(b)
);
console.log(
  "Descending array with sort() method and localCompare function",
  ascendingUserArrayLocal
);

const descendingArray = [...userArray].sort((a, b) => b.localeCompare(a));
console.log(
  "Descending array with sort() method and localCompare function",
  descendingArray
);

// Видалити елементи з масиву з 2 по 4 (включно!).
const filteredArray = ascendingUserArray.filter(
  (item, index, array) =>
    array.indexOf(item) !== 1 &&
    array.indexOf(item) !== 2 &&
    array.indexOf(item) !== 3
);
console.log("Filtered user array (without items 2, 3, 4)", filteredArray);

const deletedItems = ascendingUserArray.splice(1, 3);
console.log("Updated user array (without items 2, 3, 4)", ascendingUserArray);
console.log("Deleted items array", deletedItems);
