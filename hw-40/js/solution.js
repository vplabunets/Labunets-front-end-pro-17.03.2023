(function () {
  const listEl = document.querySelectorAll("ul li");
  const itemsTextContentArray = [];

  for (let itemEl of listEl) {
    console.log(itemEl);
    itemsTextContentArray.push(itemEl.textContent);
  }
  console.log("Total items (li) quantity:", listEl.length);

  console.log("Items text content:", itemsTextContentArray);
})();
