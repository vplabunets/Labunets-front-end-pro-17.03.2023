const wrapperEl = document.querySelector(".wrapper");

const startNumber = 1;
const finishNumber = 100;
const tableSize = 10;
let tableDataString = "";

for (let i = startNumber; i <= finishNumber; i += 1) {
  tableDataString = tableDataString + `<td>${i}</td>`;
  if (i === startNumber) {
    tableDataString = `<tr><td>${i}</td>`;
  }
  if (i % tableSize === 0 && i !== finishNumber) {
    tableDataString = tableDataString + `</tr><tr>`;
  }
  if (i === finishNumber) {
    tableDataString = tableDataString + `</tr>`;
  }
}

wrapperEl.innerHTML = `<table class="numbersTable"><caption>Numbers from ${startNumber} to ${finishNumber}</caption>${tableDataString}</table>`;
