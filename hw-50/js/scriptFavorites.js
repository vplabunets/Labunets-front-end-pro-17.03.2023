(function () {
  const tableEl = document.querySelector("table");
  const tdEls = document.querySelectorAll(" tbody tr");
  const favoritesWrapperEl = document.querySelector("#favorites-wrapper");
  const LOCALSTORAGE_KEY = "favorites";
  const favoritesArray =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];

  document.addEventListener("DOMContentLoaded", () => {
    const favorites = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (favorites.length > 0) {
      favoritesWrapperEl.innerHTML = createFavoritesMarkup(favorites);
    }
    tdEls.forEach((el) => {
      if (favorites.includes(el.firstElementChild.textContent)) {
        el.lastElementChild.firstElementChild.classList.add("btn-danger");
        el.lastElementChild.firstElementChild.textContent = "Remove";
      }
    });
  });

  tableEl.addEventListener("click", (evt) => {
    const targetedDay =
      evt.target.closest("tbody tr").firstElementChild.textContent;
    if (favoritesArray.includes(targetedDay)) {
      evt.target.classList.remove("btn-danger");
      evt.target.textContent = "Add";
      favoritesArray.splice(favoritesArray.indexOf(targetedDay), 1);
    } else {
      evt.target.classList.add("btn-danger");
      evt.target.textContent = "Remove";
      favoritesArray.push(targetedDay);
    }
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(favoritesArray));
    favoritesWrapperEl.innerHTML = createFavoritesMarkup(favoritesArray);
  });

  function createFavoritesMarkup(favorites) {
    if (favorites.length > 0) {
      return `<table class="table table-bordered w-25">
                <thead >
                  <th scope="col">Favorites</th>
                </thead>
                ${favorites
                  .map(
                    (element) => `  
                        <tr>
                          <td>${element}</td>
                        </tr>`
                  )
                  .join("")}      
              </table>`;
    }
    return "";
  }
})();
