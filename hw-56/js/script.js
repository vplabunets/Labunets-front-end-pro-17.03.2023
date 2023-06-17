const array = [10, 20, 30];

function arrayIterator(array) {
  let i = 0;
  return () => {
    const element = array[i];
    if (i < array.length) {
      i += 1;
    } else {
      return { done: true };
    }
    return element;
  };
}

const element = arrayIterator(array);

console.log(element());
console.log(element());
console.log(element());
console.log(element());

const object = { a: 10, b: 20, c: 30 };

function objectIterator(object) {
  const key = Object.keys(object);
  let i = 0;
  return () => {
    const element = { value: object[key[i]], done: false };
    if (i < key.length) {
      i += 1;
    } else {
      return { value: undefined, done: true };
    }
    return element;
  };
}

const element = objectIterator(object);
console.log(element());
console.log(element());
console.log(element());
console.log(element());
