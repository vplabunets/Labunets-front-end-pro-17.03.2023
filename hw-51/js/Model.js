"use strict";

const Model = {
  storage: null,
  dataKey: "data-key",

  getData() {
    return JSON.parse(this.storage.getItem(this.dataKey)) || [];
  },

  getDataById(id) {
    const data = this.getData();
    return data.find((item) => +item.id === id);
  },

  deleteData(id) {
    const inputData = this.getData();
    const outputData = inputData.filter((todo) => todo.id !== id);
    this.storage.setItem(this.dataKey, JSON.stringify(outputData));
  },

  postData(todoItem) {
    let data = this.getData();
    const dataToSave = { ...todoItem, id: Date.now() };
    data = [dataToSave, ...data];
    this.storage.setItem(this.dataKey, JSON.stringify(data));
    return data;
  },

  init(storage, storageKey) {
    if (typeof storageKey === "string") this.dataKey = storageKey;
    this.storage = storage;
  },
};
