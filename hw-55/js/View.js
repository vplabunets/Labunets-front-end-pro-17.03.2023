"use strict";
const View = {
  todoItemsBlock: null,

  renderElement(todoItemsData) {
    if (todoItemsData) {
      const arr = todoItemsData[Symbol.iterator]()
      let  done =false;
      let markup =''
      while(!done){
        const element = arr.next()
         done = element.done
        if (!done){
          markup+= this.createTodoItemMarkup(element.value)
        }
      }
      this.todoItemsBlock.innerHTML = markup
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



