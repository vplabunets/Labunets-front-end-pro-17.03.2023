//  indexOf;
const arr1 = ["a", "b", "c"];
function indexOf(array, element, fromIndex = 0) {
  for (let i = fromIndex; i <= array.length; i += 1) {
    if (array[i] === element) return i;
  }
  return -1;
}
console.log(indexOf(arr1, "a"));

//lastIndexOf
const arr2 = [1, 2, 3, 1, 2, 3, 1, 2, 3];
function lastIndexOf(array, element, startIndex = array.length) {
  let lastIndex = -1;
  for (let i = 0; i <= array.length + startIndex; i += 1) {
    if (array[i] === element) lastIndex = i;
  }
  return lastIndex;
}
console.log(lastIndexOf(arr2, 3, -2));

//find
function find(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) return array[index];
  }
  return undefined;
}
console.log(find(arr2, (element, index, array) => element === 2));

// findIndex
function findIndex(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) return index;
  }
  return -1;
}
console.log(findIndex(arr2, (element, index, array) => element === 11));

//includes
function includes(array, element, fromIndex = 0) {
  for (let i = fromIndex; i <= array.length; i += 1) {
    if (array[i] === element) return true;
  }
  return false;
}
console.log(includes(arr1, "c"));

//every
function every(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    if (!callback(array[index], index, array)) return false;
  }
  return true;
}
console.log(every(arr2, (element, index, array) => element >= 1));

//some
function some(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) return true;
  }
  return false;
}
console.log(some(arr2, (element, index, array) => element >= 10));
