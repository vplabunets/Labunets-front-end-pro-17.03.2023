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
  static Sizes = {
    SMALL: { price: 50, energy: 20 },
    BIG: { price: 100, energy: 40 },
  };
  static Fillings = {
    CHEESE: { price: 10, energy: 20 },
    SALAD: { price: 20, energy: 5 },
    POTATOES: { price: 15, energy: 10 },
  };
  static Additives = {
    SPICES: { price: 15, energy: 0 },
    MAYONNAISE: { price: 20, energy: 5 },
    MUSTARD: { price: 15, energy: 20 },
  };

  size = "";
  filling = "";
  additives = [];
  totalPrice = 0;
  totalEnergy = 0;

  constructor(size, filling) {
    this.size = size.toUpperCase();
    this.filling = filling.toUpperCase();
  }

  calculatePrice() {
    this.totalPrice =
      Hamburger.Sizes[this.size].price +
      (Hamburger.Fillings[this.filling].price ?? 0) +
      (this.additives.length === 0
        ? 0
        : this.additives.reduce((sum, element) => {
            sum += Hamburger.Additives[element].price;
            return sum;
          }, 0));
    return this;
  }

  calculateEnergy() {
    this.totalEnergy =
      Hamburger.Sizes[this.size].energy +
      (Hamburger.Fillings[this.filling].energy ?? 0) +
      (this.additives.length === 0
        ? 0
        : this.additives.reduce((sum, element) => {
            sum += Hamburger.Additives[element].energy;
            return sum;
          }, 0));
    return this;
  }

  addAdditive(additive) {
    this.additives.push(additive);
    return this;
  }
  removeAdditive(additive) {
    this.additives.splice(this.additives.indexOf(additive), 1);
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
  `SMALL CHEESE HAMBURGER WITH ${smallHamburger.additives}`,
  smallHamburger
);
smallHamburger.addAdditive("MUSTARD").calculatePrice().calculateEnergy();
console.log(
  `SMALL CHEESE HAMBURGER WITH ${smallHamburger.additives}`,
  smallHamburger
);
smallHamburger.removeAdditive("MAYONNAISE").calculatePrice().calculateEnergy();
console.log(
  `SMALL CHEESE HAMBURGER WITH ${smallHamburger.additives}`,
  smallHamburger
);
