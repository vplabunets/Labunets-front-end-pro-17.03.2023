const focusedEl = document.querySelector(".focused");
const focusingEl = document.querySelector(".focusing");

focusedEl.addEventListener("focus", addElement);
focusedEl.addEventListener("blur", removeElement);

function addElement() {
  focusingEl.classList.remove("hidden");
}
function removeElement() {
  focusingEl.classList.add("hidden");
}
