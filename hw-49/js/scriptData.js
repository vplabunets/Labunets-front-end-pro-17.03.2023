import { LOCALSTORAGE_KEY } from "../js/script.js";

(function () {
  const containerEl = document.querySelector(".container");
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (data) {
    const keys = Object.keys(data);
    containerEl.innerHTML = `
      <h1>${data.firstName + " " + data.lastName} data</h1>
    <ul class="list-group">
      ${keys
        .map((el) => `<li class="list-group-item">${data[el]}</li>`)
        .join("")}
        </ul>`;
  } else {
    containerEl.innerHTML = `<h1>Mistake</h1>
    <p>There is no data to be presented</p>
    <p>Please, turn back</p>
    <button class="btn btn-secondary"><a href="index.html">Go Back</a></button>`;
  }
})();
