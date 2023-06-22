function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.presence = new Array(10);
  this.marks = new Array(10);
  this.currentLesson = 0;
  this.currentMark = 0;

  Student.prototype.present = function () {
    if (this.currentLesson < 10) {
      this.presence[this.currentLesson] = true;
      this.currentLesson += 1;
    }
  };
  Student.prototype.absent = function () {
    if (this.currentLesson < 10) {
      this.presence[this.currentLesson] = false;
      this.currentLesson += 1;
    } else console.log("presence array is full");
  };
  Student.prototype.mark = function (mark) {
    if (this.currentMark < 10) {
      this.marks[this.currentMark] = mark;
      this.currentMark += 1;
    } else console.log("Marks array is full");
  };

  Student.prototype.getAge = function () {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const studentAge = year - this.birthYear;
    return `${this.firstName} ${this.lastName} is ${studentAge}`;
  };
  Student.prototype.getAverageRate = function () {
    let averageMark = 0;
    if (this.mark.length !== 0) {
      averageMark =
        this.marks.reduce((sum, el) => sum + Number(el), 0) / this.marks.length;
    }
    return averageMark;
  };

  Student.prototype.summary = function () {
    const presenceDays = this.presence.filter((el) => el === true).length;
    const totalDays = this.presence.length;
    const averagePresence = +(presenceDays / totalDays).toFixed(1);
    const averageMark = +this.getAverageRate();

    if (averagePresence > 0.9 && averageMark > 9) {
      return "Ути какой молодчинка!";
    }
    if (
      (averagePresence <= 0.9 && averageMark > 9) ||
      (averagePresence > 0.9 && averageMark <= 9)
    ) {
      return "Норм, но можно лучше";
    } else {
      return "Редиска!";
    }
  };
}

const Dua = new Student("Dua", "Lipa", 1995);
Dua.absent();
Dua.present();
Dua.present();
Dua.present();
Dua.present();
Dua.present();
Dua.present();
Dua.present();
Dua.present();
Dua.present();
Dua.mark(10);
Dua.mark(9);
Dua.mark(10);
Dua.mark(9);
Dua.mark(10);
Dua.mark(9);
Dua.mark(10);
Dua.mark(9);
Dua.mark(10);
Dua.mark(9);
Dua.mark(10);
Dua.mark(9);

console.log(Dua.getAge());
console.log(
  `Average mark of ${Dua.firstName} ${Dua.lastName} is ${Dua.getAverageRate()}`
);
console.log(Dua.summary());

const Volodymyr = new Student("Volodymyr", "Samoluk", 1994);
Volodymyr.absent();
Volodymyr.present();
Volodymyr.absent();
Volodymyr.present();
Volodymyr.present();
Volodymyr.absent();
Volodymyr.present();
Volodymyr.present();
Volodymyr.present();
Volodymyr.absent();
Volodymyr.mark(1);
Volodymyr.mark(9);
Volodymyr.mark(10);
Volodymyr.mark(9);
Volodymyr.mark(10);
Volodymyr.mark(9);
Volodymyr.mark(10);
Volodymyr.mark(9);
Volodymyr.mark(2);
Volodymyr.mark(9);

console.log(Volodymyr.getAge());
console.log(
  `Average mark of ${Volodymyr.firstName} ${
    Volodymyr.lastName
  } is ${Dua.getAverageRate()}`
);
console.log(Volodymyr.summary());
