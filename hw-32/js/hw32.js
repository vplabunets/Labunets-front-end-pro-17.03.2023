import { cards } from "./cards.js";
import { categories } from "./categories.js";
import { createCardsListMarkup } from "./cards-list.js";
import {
  myOrdersButtonMarkup,
  createCategoriesMarkup,
} from "./markupElements.js";
let currentId = null;
let confirmedOrder = [];

const bodyEl = document.querySelector("body");
const modalScreenEl = document.querySelector(".modal-screen");
const ordersButtonWrapperEl = document.querySelector(".orders-button-wrapper");
const cartEl = document.querySelector(".cart");

const selectWrapperEl = document.querySelector(".select-wrapper");
const cardsListEl = document.querySelector(".cards-list");

selectWrapperEl.innerHTML = createCategoriesMarkup(categories);
const selectEl = document.querySelector(".select");
modalScreenEl.addEventListener("click", onCloseModalButton);
selectEl.addEventListener("change", onSelectChange);
cardsListEl.addEventListener("click", onButtonOrder);
cardsListEl.innerHTML = createCardsListMarkup(cards);

function onSelectChange(evt) {
  if (!evt.target.value) {
    cardsListEl.innerHTML = createCardsListMarkup(cards);
  }
  const filteredCards = cards.filter((card) => card.type === evt.target.value);
  cardsListEl.innerHTML = createCardsListMarkup(filteredCards);
}

function createMyOrdersButtonMarkup() {
  if (localStorage.getItem("orders")) {
    const orders = localStorage.getItem("orders");
    confirmedOrder = JSON.parse(orders);
  }
  confirmedOrder.length &&
    (ordersButtonWrapperEl.innerHTML = myOrdersButtonMarkup);
}
createMyOrdersButtonMarkup();

function onButtonOrder(evt) {
  let selectedCard = null;
  if (evt.target.nodeName === "BUTTON") {
    currentId = +evt.target.id;
    if (localStorage.getItem("orders")) {
      const orders = localStorage.getItem("orders");
      confirmedOrder = JSON.parse(orders);
      selectedCard = confirmedOrder.find(
        (order) => order.id === +evt.target.id
      );

      if (confirmedOrder.find((order) => order.id === currentId)) {
        selectedCard.quantity += 1;
        selectedCard.orderDate = Date.now();
        localStorage.setItem("orders", JSON.stringify(confirmedOrder));
        return;
      }
      selectedCard = cards.find((card) => card.id === currentId);
      selectedCard.orderDate = Date.now();
      selectedCard.quantity = 1;
      confirmedOrder = [...confirmedOrder, selectedCard];
      localStorage.setItem("orders", JSON.stringify(confirmedOrder));
      return;
    }
    selectedCard = cards.find((card) => card.id === currentId);
    selectedCard.orderDate = Date.now();
    selectedCard.quantity = 1;
    confirmedOrder = [...confirmedOrder, selectedCard];
    localStorage.setItem("orders", JSON.stringify(confirmedOrder));
  }
  createMyOrdersButtonMarkup();
}

const myOrderButtonEl = document.querySelector(".orders-button-wrapper");
myOrderButtonEl.addEventListener("click", onMyOrderButton);

function onMyOrderButton() {
  const orderMarkup = confirmedOrder
    .map((element) => {
      const dateInMilliSeconds = element.orderDate;
      const date = new Date(dateInMilliSeconds);
      const y = date.getFullYear();
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return `<li class="cart-list-item"></div><div class="order"><div class="order-total-price">Total price: ${
        element.price * element.quantity
      } USD</div>
    <div class="order-date"> Date: ${d}:${m}:${y}</div><button class="button order-details " data-id="${
        element.id
      }">Order details</button><button class="button order-delete" type="button" data-id="${
        element.id
      }" id="delete-button" >Delete Order</button></div></li>`;
    })
    .join("");
  cartEl.innerHTML = `<ul>${orderMarkup}</ul>`;
}

cartEl.addEventListener("click", onDeleteButton);
cartEl.addEventListener("click", onOrderDetailsButton);

function onDeleteButton(evt) {
  if (
    evt.target.nodeName === "BUTTON" &&
    evt.target.textContent === "Delete Order"
  ) {
    const targetedId = +evt.target.dataset.id;
    confirmedOrder = confirmedOrder.filter((order) => order.id !== targetedId);
    localStorage.setItem("orders", JSON.stringify(confirmedOrder));
  }
  onMyOrderButton();

  if (confirmedOrder.length === 0) {
    ordersButtonWrapperEl.innerHTML = "";
  }
}
function onOrderDetailsButton(evt) {
  if (
    evt.target.nodeName === "BUTTON" &&
    evt.target.textContent === "Order details"
  ) {
    const targetedId = +evt.target.dataset.id;
    const order = confirmedOrder.find((order) => order.id === targetedId);
    const orderDetailsMarkup = `<div class="backdrop">
    <div class="modal">
      <h2>Order Details</h2>
      <div>Description: ${order.title}</div>
      <div>  <img class="card-image"
        src=${order.link}
        alt=${order.alt}
        width="250"
        height="100"
      /></div>
      <div>Quantity: ${order.quantity}</div>
      <div>Total price: ${order.price * order.quantity}</div>
      <button id="close-modal" class="close-modal button" type="button">Close</button>
      </div>
      </div>`;
    modalScreenEl.innerHTML = orderDetailsMarkup;
    bodyEl.classList.add("no-scroll");
  }
}

function onCloseModalButton(evt) {
  if (evt.target.nodeName === "BUTTON" && evt.target.textContent === "Close") {
    modalScreenEl.innerHTML = "";
    bodyEl.classList.remove("no-scroll");
  }
}
