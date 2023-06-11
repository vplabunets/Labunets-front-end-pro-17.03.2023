"use strict";
let user = {
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a1: 1,
      b1: 2,
      c1: 3,
      d1: {
        a2: 3,
        b2: 3,
        c2: 3,
      },
    },
  },
};

function freezeObject(user) {
  for (const key in user) {
    if (typeof user[key] === "object") {
      console.log(user[key]);
      rec(user[key]);
      Object.freeze(user[key]);
    }
  }
  Object.freeze(user);
}
freezeObject(user);
