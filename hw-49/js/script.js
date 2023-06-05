export const LOCALSTORAGE_KEY = "userData";

(function () {
  const formEl = document.querySelector("#form");
  if (formEl) {
    const formElements = [
      ...document.querySelectorAll("input, select, textarea"),
    ];
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const data = formElements.reduce((acc, el) => {
        acc[el.name] = el.value;
        return acc;
      }, {});
      try {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
        location.href = "/hw-49/data.html";
      } catch (error) {
        console.log(error.message);
      }
    });
  }
})();
