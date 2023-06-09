"use strict";

const Controller = {
  form: null,
  todoItemsBlock: null,

  initListeners() {
    this.form.addEventListener("submit", this.formHandler.bind(this));
    this.form.addEventListener("click", this.formReset.bind(this));
    this.todoItemsBlock.addEventListener(
      "click",
      this.deleteItemHandler.bind(this)
    );
    window.addEventListener("DOMContentLoaded", this.prerenderTodos.bind(this));
  },

  formHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    const data = {};
    this.form.querySelectorAll("input, textarea, select").forEach((input) => {
      if (input.type !== "reset") {
        data[input.name] = input.value;
      }
    });
    const savedData = Model.postData(data);
    this.form.reset();
    View.renderElement(savedData);
  },

  formReset(e) {
    if (e.target.type !== "reset") return;
    this.form.reset();
  },

  deleteItemHandler(e) {
    if (e.target.nodeName === "BUTTON") {
      Model.deleteData(+e.target.dataset.id);
      View.renderElement(Model.getData());
    }
  },

  prerenderTodos() {
    const data = Model.getData();
    if (!data.length) return;
    View.renderElement(data);
  },

  init(fromSelector, blockSelector) {
    if (typeof fromSelector !== "string" || typeof blockSelector !== "string") {
      throw new Error("");
    }
    const form = document.querySelector(fromSelector);
    if (!form) {
      throw new Error("You should pass form element");
    }
    const block = document.querySelector(blockSelector);
    if (!block) throw new Error("You should pass block element");

    this.form = form;
    this.todoItemsBlock = block;
    this.initListeners();
    View.setTodoItemsBlock(block);
  },
};
