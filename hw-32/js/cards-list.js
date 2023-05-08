export function createCardsListMarkup(cards) {
  return cards
    .map(
      (card) => `
    <div class="card">
  <h3 class="card-title">${card.title.toUpperCase()}</h3>
    <img class="card-image"
      src=${card.link}
      alt=${card.alt}
      width="250"
      height="100"
    />
    <ul>
      <li>
        Weight: <b>${card.weight} g</b>
      </li>
      <li>
        Energy: <b>${card.energy} Kcal</b>
      </li>
      <li>
        Protein: <b>${card.protein} g</b>
      </li>
      <li>
        Fat: <b>${card.fat} g</b>
      </li>
      <li>
        Price: <b>${card.price} USD</b>
      </li>
    </ul>
    <button class="button" type="button" id="${card.id}" value="${card.id}">
      Order
    </button>

</div>
    `
    )
    .join("");
}
