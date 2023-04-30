const readdressButtonEl = document.querySelector("#readdressButton");
const linkInputEl = document.querySelector("#linkInput");

readdressButtonEl.addEventListener("click", onClickHandler);
linkInputEl.addEventListener("change", onChangeHandler);

function onChangeHandler(evt) {
  readdressButtonEl.textContent = "Readdress to " + evt.target.value;
}

function onClickHandler() {
  let correctLink = "";
  const value = linkInputEl.value;
  correctLink = value;
  if (value.indexOf("http") === -1 || value.indexOf("https") === -1) {
    correctLink = "https://" + value;
  }

  window.location.href = correctLink;
}
