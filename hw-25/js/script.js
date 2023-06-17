//  indexOf;
function indexOf(array, element) {
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === element) return i;
  }
  return -1;
}

console.log(indexOf([1, 2, 3], 55));

function lastIndexOf(array, element) {
  let lastIndex = -1;
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === element) {
      lastIndex = i;
    }
  }
  return lastIndex;
}

console.log(lastIndexOf([1, 2, 3, 1, 2, 3, 1, 2, 3], 3));

function find(array, element) {
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === element) {
      return array[i];
    }
  }
  return undefined;
}

console.log(find([1, 2, 3, 1, 2, 3, 1, 2, 3], 33));

function findIndex(array, element) {
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(find([1, 2, 3, 1, 2, 3, 1, 2, 3], 33));

const xxx = [[1, 2, 3], { a: 1, b: 2 }, 1, 2, 3, 1, 2, 3].find(
  (el, index, array) => el.a === 1
);
console.log(xxx);
