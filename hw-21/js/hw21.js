// 1. Створити клас Людина.

// Властивості:
//    імʼя;
//    стать.
// Методи:
//    конструктор, який приймає два параметри: імʼя та стать.

class Human {
  name = "";
  sex = "";
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

const victoriaBeckham = new Human("Victoria Beckham", "female");
const davidBeckham = new Human("David Beckham", "male");
const monicaBelucci = new Human("Monica Belucci", "female");
const vincentCassel = new Human("Vincent Cassel", "male");
const wandaNara = new Human("Wanda Nara", "female");
const mauroIccardi = new Human("Mauro Iccardi", "male");
console.log("victoriaBeckham", victoriaBeckham);
console.log("davidBeckham", davidBeckham);
console.log("monicaBelucci", monicaBelucci);
console.log("vincentCassel", vincentCassel);
console.log("wandaNara", wandaNara);
console.log("mauroIccardi", mauroIccardi);

// 2. Створити клас Квартира.

// Властивості:
//    конструктор не потрібен;
//    масив жителів, який при створенні пустий.
// Методи:
//    додати жителя - метод повинен приймати екземпляр
//    класу Людина, та додавати до масиву жителів.

class Flat {
  inhabitants = [];
  addInhabitant(inhabitant) {
    this.inhabitants.push(inhabitant);
    return this;
  }
}

const flatBeckham = new Flat();
const flatBelucciCassel = new Flat();
const flatNaraIccardi = new Flat();
flatBeckham.addInhabitant(victoriaBeckham).addInhabitant(davidBeckham);
flatBelucciCassel.addInhabitant(monicaBelucci).addInhabitant(vincentCassel);
flatNaraIccardi.addInhabitant(wandaNara).addInhabitant(mauroIccardi);
console.log("flatBeckham", flatBeckham);
console.log("flatBelucciCassel", flatBelucciCassel);
console.log("flatNaraIccardi", flatNaraIccardi);

// 3. Створити клас Будинок.

// Властивості:
//    масив квартир, який при створенні пустий;
//    максимальна кількість квартир.
// Методи:
//    конструктор, який приймає один параметр: максимальну кількість квартир;
//    додати квартиру - метод повинен приймати екземпляр класу Квартира,
//    перевіряти, чи не буде кількість перевищувати максимальну кількість квартир,
//    і якщо це так, додати квартиру,
//    в іншому випадку виводить у консоль відповідне повідомлення.

class House {
  maxFlatsQuantity = 0;
  flats = [];
  constructor(maxFlatsQuantity) {
    this.maxFlatsQuantity = maxFlatsQuantity;
  }
  addFlat(flat) {
    if (this.flats.length <= this.maxFlatsQuantity) {
      this.flats.push(flat);
      return this;
    }
    console.log("The house #1 is full. Please, use house #2");
  }
}

const house = new House(3);
house.addFlat(flatBeckham).addFlat(flatBelucciCassel).addFlat(flatNaraIccardi);
console.log("house", house);
