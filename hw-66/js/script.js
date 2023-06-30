const goods = [['футболка', 15], ['шорты', 25], ['носки', 5]];

console.log((function sum  () {
  let goodsSum = 0
  const goodsMapped = new Map(goods)
  goodsMapped.forEach((value) => goodsSum += value)

  return goodsSum})())




