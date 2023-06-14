(function () {
  function calcPotatoesKgs(borshchVolume, potatoKgPrice) {
    const AVERAGE_POTATO_WEIGHT = 0.075;
    const potatoQuantity = Math.ceil(borshchVolume * 4 * AVERAGE_POTATO_WEIGHT);
    const totalPotatoPrice = potatoQuantity * potatoKgPrice;
    return `${totalPotatoPrice} UAH`;
  }

  console.log(calcPotatoesKgs(48, 13));
})();
