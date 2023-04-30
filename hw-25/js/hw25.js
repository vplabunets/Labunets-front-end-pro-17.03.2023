const focusingEl = document.querySelector(".focusing");
const appearingEl = document.querySelector(".appearing");

focusingEl.addEventListener("focus", addElement);
focusingEl.addEventListener("blur", removeElement);

function addElement() {
  appearingEl.classList.remove("hidden");
}
function removeElement() {
  appearingEl.classList.add("hidden");
}
