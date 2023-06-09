"use strict";
const View = {
  todoItemsBlock: null,

  renderElement(todoItemsData) {
    if (todoItemsData) {
      this.todoItemsBlock.innerHTML = todoItemsData
        .map((todoItemsData) => this.createTodoItemMarkup(todoItemsData))
        .join("");
    }
    return "";
  },

  setTodoItemsBlock(domEl) {
    if (!(domEl instanceof HTMLElement))
      throw new Error("TodoItemsBlock should be a DOM element");
    this.todoItemsBlock = domEl;
  },

  init(createTodoItemMarkup) {
    if (typeof createTodoItemMarkup !== "function") return;
    this.createTodoItemMarkup = createTodoItemMarkup;
  },
};
