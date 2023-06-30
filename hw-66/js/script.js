const goods = [['футболка', 15], ['шорты', 25], ['носки', 5]];

(function (){
  function sum  (array) {
    let goodsSum = 0
    const goodsMapped = new Map(array)
    goodsMapped.forEach((value,) => goodsSum += value)
    return goodsSum
  }

  console.log("Total goods elements value equals",sum(goods));
}

)()

