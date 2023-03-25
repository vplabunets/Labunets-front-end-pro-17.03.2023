//Task #1
let hoursQuantity = prompt("Please, enter hours quantity");
hoursQuantity = Number(hoursQuantity);

const secondsInHours = hoursQuantity * 60 * 60;

alert(`${hoursQuantity} hour(s) equal(s) ${secondsInHours} seconds`);
