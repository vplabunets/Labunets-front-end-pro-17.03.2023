"use strict";

(function () {
  function createTodoItemMarkup({ title, description, id }) {
    console.log(title)
    return `<div class="col-3 bg-info p-2 rc rounded-1"> 
              <p>${title}</p>
              <p>${description}<span></span></p>
              <button class="btn btn-danger" data-id=${id}>Delete</button>
            </div>`;
  }

  Model.init(localStorage);
  View.init(createTodoItemMarkup);
  Controller.init("#todoForm", "#todoItems");
})();
