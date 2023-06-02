export const LOCALSTORAGE_KEY = "userData";

(function () {
  const formEl = document.querySelector("#form");
  if (formEl) {
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const {
        email,
        firstName,
        lastName,
        nickName,
        password,
        option,
        message,
        file,
        terms,
      } = formEl.elements;
      const data = {
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        nickName: nickName.value,
        password: password.value,
        option: option.value,
        message: message.value,
        file: file.value,
        terms: terms.value,
      };

      try {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
        location.href = "/hw-49/data.html";
      } catch (error) {
        console.log(error.message);
      }
    });
  }
})();
