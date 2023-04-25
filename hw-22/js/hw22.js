const MIN_OWNER_AGE = 18;
// 1. Створити сутність "Людина".

//    Властивості:
//        імʼя;
//        вік.
//    Методи:
//        конструктор, який приймає два параметри: імʼя та вік;
//        метод, який виводить у консоль інформацію про людину.

class Human {
  name = "";
  age = 18;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(this);
    console.log(this.name, this.age);
  }
}

const monicaBelucci = new Human("Monica Belucci", 58);
const wandaNara = new Human("Wanda Nara", 36);
monicaBelucci.getHumanInfo();
wandaNara.getHumanInfo();

// 2. Створити сутність "Автомобіль".

// Властивості:
//    марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
//    власник.
// Методи:
//    конструктор, який приймає чотитри параметри (тобто, всі окрім власника):
//    марка, модель, рік виписку, номерний знак
//    присвоїти власника - метод повинен приймати екземпляр класу Людина,
//    та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18,
//    інакше виводити у консоль відповідне повідомлення
//    метод, який виводить у консоль інформацію про автомобіль та викликає
//    метод виводу інформації класу Людина для виведення інформації про власника

class Car {
  brand = "";
  model = "";
  productionYear = 0;
  plate = "";
  carOwner = null;

  constructor(brand, model, productionYear, plate) {
    this.brand = brand;
    this.model = model;
    this.productionYear = productionYear;
    this.plate = plate;
  }
  setOwner(carOwner) {
    if (carOwner.age >= MIN_OWNER_AGE) {
      this.carOwner = carOwner;
      return this;
    }
    console.log("Owner should be older than 18 years");
    return this;
  }
  getInfo() {
    console.log(this);
    this.carOwner.getInfo;
  }
}

const monicaCar = new Car("Alfa Romeo", "Giulia Veloce", 2023, "MILANO777");
const wandaCar = new Car("Lamborgini", "Diablo", 2000, "BOLOGNA666");

monicaCar.setOwner(monicaBelucci);
wandaCar.setOwner(wandaNara);

monicaCar.getInfo();
wandaCar.getInfo();
