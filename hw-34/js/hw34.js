const formEl = document.querySelector(".form");
const cartEl = document.querySelector(".cart");

let postId = null;
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(ev) {
  ev.preventDefault();
  const data = new FormData(formEl);
  const inputId = data.get("postId");
  formEl.reset();
  commentsEl.innerHTML = "";
  fetchPostById(inputId)
    .then((post) => createPostMarkup(post))
    .catch((error) => console.log(error.message));
}

function fetchPostById(id) {
  postId = id;
  return fetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
}

function createPostMarkup(post) {
  if (post.length > 0) {
    const { title, body, id } = post[0];
    const markup = `<div>
  <h2>${title}</h2>
  <p> ${body}</div>
  <button id="comments-button" class="button" type="button">Get comments</button>`;
    cartEl.innerHTML = markup;
  }
}

function fetchCommentsById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${+id}`)
    .then((response) => response.json())
    .then((comments) => createCommentsMarkup(comments))
    .catch((error) => console.error(error));
}

const commentsButtonEl = document.querySelector("#comments-button");
const commentsEl = document.querySelector(".comments");
cartEl.addEventListener("click", onCommentsButtonClick);

function createCommentsMarkup(comments) {
  if (comments.length > 0) {
    const markup = `<ul>${comments
      .map(
        ({ name, email, body }) => `<li>
      <ul class="comment-list">
      <li><b>Name:</b> ${name}</li>
      <li><b>Email:</b> ${email}</li>
      <li><b>Comment:</b> ${body}</li>
      </ul>
      </li>`
      )
      .join("")}</ul>`;
    commentsEl.innerHTML = markup;
  }
}

function onCommentsButtonClick(ev) {
  if (ev.target.nodeName === "BUTTON") {
    fetchCommentsById(postId);
  }
}
