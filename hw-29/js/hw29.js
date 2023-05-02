const data = [
  { id: 1, url: "&#128528", votes: 0 },
  { id: 2, url: "&#128522", votes: 0 },
  { id: 3, url: "&#129313", votes: 0 },
  { id: 4, url: "&#128542", votes: 10 },
  { id: 5, url: "&#128544", votes: 0 },
];

const wrapperEl = document.querySelector(".wrapper");
const smilesListEl = document.querySelector(".smilesList");
const smilesListItemEl = document.querySelector(".smilesListItem");

let markup = data
  .map(
    (element) =>
      `<li class="smilesListItem"><div class="smile" data-id=${element.id}>${element.url}</div><div class="votes">${element.votes}</d></li>`
  )
  .join("");

smilesListEl.innerHTML = markup;
const votesEl = document.querySelectorAll(".votes");
console.log(votesEl);
smilesListEl.addEventListener("click", onClickHandler);

function onClickHandler(evt) {
  const ind = evt.target.dataset.id;
  const targetedEl = data.find((element) => element.id === Number(ind));
  data[data.indexOf(targetedEl)].votes =
    data[data.indexOf(targetedEl)].votes + 1;
  votesEl[data.indexOf(targetedEl)].innerHTML =
    data[data.indexOf(targetedEl)].votes;
}
