// Мережа фастфудів пропонує кілька видів гамбургерів:

// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).

// Гамбургер може бути з одним із декількох видів начинок:

// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).

// Можна додати добавки:

// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).

class Hamburger {
  static SIZES = {
    SMALL: { price: 50, energy: 20 },
    BIG: { price: 100, energy: 40 },
  };
  static FILLINGS = {
    CHEESE: { price: 10, energy: 20 },
    SALAD: { price: 20, energy: 5 },
    POTATOES: { price: 15, energy: 10 },
  };
  static ADDITIVES = {
    SPICES: { price: 15, energy: 0 },
    MAYONNAISE: { price: 20, energy: 5 },
    MUSTARD: { price: 15, energy: 20 },
  };

  size = "";
  filling = "";
  ADDITIVES = [];
  totalPrice = 0;
  totalEnergy = 0;

  constructor(size, filling) {
    this.size = size.toUpperCase();
    this.filling = filling.toUpperCase();
  }

  calculatePrice() {
    this.totalPrice =
      Hamburger.SIZES[this.size].price +
      (Hamburger.FILLINGS[this.filling].price ?? 0) +
      (this.ADDITIVES.length === 0
        ? 0
        : this.ADDITIVES.reduce((sum, element) => {
            sum += Hamburger.ADDITIVES[element].price;
            return sum;
          }, 0));
    return this;
  }

  calculateEnergy() {
    this.totalEnergy =
      Hamburger.SIZES[this.size].energy +
      (Hamburger.FILLINGS[this.filling].energy ?? 0) +
      (this.ADDITIVES.length === 0
        ? 0
        : this.ADDITIVES.reduce((sum, element) => {
            sum += Hamburger.ADDITIVES[element].energy;
            return sum;
          }, 0));
    return this;
  }

  addAdditive(additive) {
    this.ADDITIVES.push(additive);
    return this;
  }
  removeAdditive(additive) {
    this.ADDITIVES.splice(this.ADDITIVES.indexOf(additive), 1);
    return this;
  }
}

const smallHamburger = new Hamburger("SMALL", "CHEESE")
  .calculatePrice()
  .calculateEnergy();
console.log("SMALL CHEESE HAMBURGER WITHOUT ADDITIVES", smallHamburger);
smallHamburger
  .addAdditive("MAYONNAISE")
  .addAdditive("SPICES")
  .calculatePrice()
  .calculateEnergy();
console.log(
  `SMALL CHEESE HAMBURGER WITH ${smallHamburger.ADDITIVES}`,
  smallHamburger
);
smallHamburger.addAdditive("MUSTARD").calculatePrice().calculateEnergy();
console.log(
  `SMALL CHEESE HAMBURGER WITH ${smallHamburger.ADDITIVES}`,
  smallHamburger
);
smallHamburger.removeAdditive("MAYONNAISE").calculatePrice().calculateEnergy();
console.log(
  `SMALL CHEESE HAMBURGER WITH ${smallHamburger.ADDITIVES}`,
  smallHamburger
);
