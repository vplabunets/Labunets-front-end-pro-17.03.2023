(function () {
  function insertWordInto(str) {
    return function (word) {
      let index = 0;
      const splittedArray = str.split(" ");
      if (index > splittedArray.length) {
        index = 0;
      }
      splittedArray.splice(index, 0, word);
      index += 1;
      const joinedArray = splittedArray.join(" ");
      return joinedArray;
    };
  }
  const newString = insertWordInto("Hello world");
  console.log(newString("Odesa"));
  console.log(newString("Odesa"));
  console.log(newString("Odesa"));
})();
