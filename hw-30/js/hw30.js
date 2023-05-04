import { cards } from "./cards.js";
import { createCardsListMarkup } from "./cards-list.js";
const ordersMaxQuantity = 1000;
const ordersMinQuantity = 1;
let currentId = null;
const confirmedOrder = [];

const confirmFormEl = document.querySelector("#confirm-form");
const cardsListEl = document.querySelector(".cards-list");
const messageEl = document.querySelector(".message");

cardsListEl.innerHTML = createCardsListMarkup(cards);
cardsListEl.addEventListener("click", onButtonOrder);
confirmFormEl.addEventListener("submit", onFormSubmit);

function upperFirstLetter(string) {
  return string.replace(string[0], string[0][0].toUpperCase());
}

function createConfirmedOrderMarkup(confirmedProduct, confirmedOrder) {
  return `<div>
  <h2>Dear, ${confirmedOrder.fullName}!</h2>
  <p> <b>${
    confirmedOrder.quantity
  }</b> pcs of <b>${confirmedProduct.title.toUpperCase()}</b> ${
    confirmedProduct.quantity === 1 ? "was" : "were"
  } ordered.</p>
    <p> Payment conditions:  <b>${confirmedOrder.paymentType}</b>.</p>
    <p>Total order price:  <b>${
      confirmedOrder.quantity * confirmedProduct.price
    } </b> USD.</p>
   <p>Order will  to be delivered to <b>${
     confirmedOrder.npOffice
   }</b> office of Nova Poshta in <b>${confirmedOrder.city}</b>.</p>
  </div>`;
}

function onButtonOrder(evt) {
  if (evt.target.nodeName === "BUTTON") {
    confirmFormEl.classList.remove("visually-hidden");
    currentId = evt.target.id;
    cardsListEl.classList.add("visually-hidden");
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(confirmFormEl);

  confirmedOrder.push({
    id: Math.round(
      Math.random() * (ordersMaxQuantity - ordersMinQuantity) +
        ordersMinQuantity
    ),
    fullName: upperFirstLetter(formData.get("fullName")),
    city: upperFirstLetter(formData.get("cities")),
    npOffice: formData.get("npOffice"),
    paymentType: upperFirstLetter(formData.get("payment-type")),
    quantity: formData.get("quantity"),
    comments: formData.get("comments"),
  });

  confirmFormEl.classList.add("visually-hidden");

  const confirmedProduct = cards.filter((card) => card.id === +currentId)[0];

  messageEl.innerHTML = createConfirmedOrderMarkup(
    confirmedProduct,
    confirmedOrder[0]
  );
}
