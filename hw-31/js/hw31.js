const users = [
  {
    id: 1,
    firstName: "Ivan",
    lastName: "Mazepa",
    birthDate: "1639-03-30",
    sex: "Male",
    city: "Baturyn",
    address: "Moon",
    languages: ["hindi"],
  },
];
const usersMinQuantity = 1;
const usersMaxQuantity = 1000;

const regFormEl = document.querySelector(".registration-form");
const sectionEl = document.querySelector(".section");
const usersListEl = document.querySelector(".users-list");

regFormEl.addEventListener("submit", onFormSubmit);

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
function upperFirstLetter(string) {
  return string.replace(string[0], string[0][0].toUpperCase());
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(regFormEl);

  users.push({
    id: Math.round(
      Math.random() * (usersMaxQuantity - usersMinQuantity) + usersMinQuantity
    ),
    firstName: upperFirstLetter(formData.get("firstName")),
    lastName: upperFirstLetter(formData.get("lastName")),
    birthDate: formData.get("birthDate"),
    sex: upperFirstLetter(formData.get("sex")),
    city: upperFirstLetter(formData.get("cities")),
    address: formData.get("address"),
    languages: formData.getAll("lang"),
  });

  const markup = users
    .map((user) => {
      const keyValueObj = Object.entries(user);
      const userInfoItemsString = keyValueObj
        .map(
          (el) =>
            `<li class="user-info-item">
            <div class="user-info-item-key">${el[0]}</div>
            <div class="user-info-item-value">${el[1]}</div>
            </li>`
        )
        .join("");
      return `<li>
        <ul class="user-info-list">
        ${userInfoItemsString}
      </ul> 
     </li>`;
    })
    .join("");
  usersListEl.innerHTML = markup;
}
