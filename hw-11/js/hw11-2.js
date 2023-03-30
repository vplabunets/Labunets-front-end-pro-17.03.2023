// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

//  1) for
console.log("FOR");

const currency = 39;
let firstAmount = 10;
let lastAmount = 100;
let exchangedAmount = null;

for (let i = firstAmount; i <= lastAmount; i += 10) {
  exchangedAmount = currency * i;
  console.log(`${i} USD is equal ${exchangedAmount} UAH`);
}
// 2) while
console.log("WHILE");

firstAmount = 10;
lastAmount = 100;
exchangedAmount = null;
let amount = firstAmount;

while (amount <= lastAmount) {
  exchangedAmount = currency * amount;
  console.log(`${amount} USD is equal ${exchangedAmount} UAH`);
  amount += 10;
}

//3) do while
console.log("DO WHILE");

firstAmount = 10;
lastAmount = 100;
exchangedAmount = null;
amount = firstAmount;

do {
  exchangedAmount = currency * amount;
  console.log(`${amount} USD is equal ${exchangedAmount} UAH`);
  amount += 10;
} while (amount <= lastAmount);
