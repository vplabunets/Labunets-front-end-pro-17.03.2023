const selectEl = document.querySelector(".form-select");
const bodyEl = document.body;
const LOCALSTORAGE_KEY = "colorMode";

selectEl.addEventListener("change", (evt) => {
  const mode = evt.target.value;
  bodyEl.setAttribute("data-bs-theme", mode);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(mode));
});

document.addEventListener("DOMContentLoaded", (evt) => {
  const mode = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  bodyEl.setAttribute("data-bs-theme", mode);
});
