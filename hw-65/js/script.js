//  indexOf;
 const arr1 = ["a", "b", "c"];
export function indexOf(array, element, fromIndex = 0) {
  for (let i = fromIndex; i <= array.length; i += 1) {
    if (array[i] === element) return i;
  }
  return -1;
}
// console.log(indexOf(arr1, "a"));

//lastIndexOf
const arr2 = [1, 2, 3, 1, 2, 3, 1, 2, 3];
export function lastIndexOf(array, element, startIndex = array.length) {
  let lastIndex = -1;
  for (let i = 0; i <= array.length + startIndex; i += 1) {
    if (array[i] === element) lastIndex = i;
  }
  return lastIndex;
}
// console.log(lastIndexOf(arr2, 3, -2));

//includes
export function includes(array, element, fromIndex = 0) {
  for (let i = fromIndex; i <= array.length; i += 1) {
    if (array[i] === element) return true;
  }
  return false;
}
// console.log(includes(arr1, "c"));

//some
export function some (array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) return true;
  }
  return false;
}
// console.log(some(arr2, (element, index, array) => element >= 10));


