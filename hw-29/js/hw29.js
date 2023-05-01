const data = [
  { index: 1, url: "&#128528", votes: 0 },
  { index: 2, url: "&#128522", votes: 0 },
  { index: 3, url: "&#129313", votes: 0 },
  { index: 4, url: "&#128542", votes: 0 },
  { index: 5, url: "&#128544", votes: 0 },
];

const wrapperEl = document.querySelector(".wrapper");
const smilesListEl = document.querySelector(".smilesList");
const smilesListItemEl = document.querySelector(".smilesListItem");

let markup = data
  .map(
    (element) =>
      `<li class="smilesListItem"><div class="smile" data-index=${element.index}>${element.url}</div><div class="votes">${element.votes}</d></li>`
  )
  .join("");

smilesListEl.innerHTML = markup;
const votesEl = document.querySelector(".votes");
smilesListEl.addEventListener("click", onClickHandler);

function onClickHandler(evt) {
  const ind = evt.target.dataset.index;
  const targetedEl = data.find((element) => element.index === Number(ind));
  data[data.indexOf(targetedEl)].votes =
    data[data.indexOf(targetedEl)].votes + 1;
  markup = data
    .map(
      (element) =>
        `<li class="smilesListItem"><div class="smile" data-index=${element.index}>${element.url}</div><div class="votes">${element.votes}</d></li>`
    )
    .join("");
  smilesListEl.innerHTML = markup;
}
