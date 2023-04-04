// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

//SPLICE
console.log("SPLICE");
function removeElement1(array, item) {
  if (!Array.isArray(array)) {
    return `First argument was entered not correctly. It is not array!`;
  } else {
    if (!array.includes(item)) {
      return `Item ${item} is not included to array [${array}]`;
    }
    const modifiedArray = [...array];
    modifiedArray.splice(array.indexOf(item), 1);
    return `After deleting of item ${item} array becomes [${modifiedArray}]`;
  }
}

const array = ["a", "b", "c"];
console.log(removeElement1(array, "z"));

//FILTER
console.log("FILTER");
function removeElement2(array, item) {
  if (!Array.isArray(array)) {
    return `First argument was entered not correctly. Is it not array!`;
  } else {
    if (!array.includes(item)) {
      return `Item ${item} is not included to array ${array}`;
    }
    const modifiedArray = [...array].filter((element) => element !== item);
    return `After deleting of item ${item} array becomes [${modifiedArray}]`;
  }
}

console.log(removeElement2([1, 2, 3, 4, 5, 6, 7], 7));
