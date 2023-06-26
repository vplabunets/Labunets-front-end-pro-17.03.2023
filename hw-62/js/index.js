(function () {
  function Student(firstName, lastName, birthYear, lessonsCount = 10) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.lessonsCount = lessonsCount;
    this.presence = new Array(this.lessonsCount);
    this.marks = new Array(this.lessonsCount);
    this.currentLesson = 1;

    Student.prototype.setPresence = function (present, nextLesson = true) {
      if (this.lessonsCount === this.currentLesson) return;
      this.presence[this.currentLesson - 1] = present;

      nextLesson ? (this.currentLesson += 1) : null;
    };

    Student.prototype.present = function (mark = null) {
      if (mark !== null && !this.validateMark(mark)) return;
      this.setPresence(true, mark === null);
      if (mark !== null) {
        this.setMark(mark);
        this.currentLesson += 1;
      }
    };
    Student.prototype.absent = function () {
      this.setPresence(false);
    };
    Student.prototype.setMark = function (mark) {
      if (!this.validateMark(mark)) return;
      this.marks[this.currentLesson - 1] = mark;
    };
    Student.prototype.validateMark = function (mark) {
      if (mark >= 0 && mark <= 10) return true;
      console.warn("Mark is not correct");
      return false;
    };

    Student.prototype.getAge = function () {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const studentAge = year - this.birthYear;
      return `${this.firstName} ${this.lastName} is ${studentAge}`;
    };

    Student.prototype.getPresenceDays = function () {
      return this.presence.filter((el) => el === true).length;
    };

    Student.prototype.getAveragePresence = function () {
      if (this.currentLesson > 0) {
        const averagePresence = (
          this.getPresenceDays() /
          (this.currentLesson - 1)
        ).toFixed(1);
        return averagePresence;
      }
      return 1;
    };

    Student.prototype.getAverageRate = function () {
      let marksSum = 0;
      let marksQuantity = 0;
      if (this.marks.length !== 0) {
        marksSum = this.marks.reduce((sum, el) => {
          if (typeof el === "number") {
            sum += el;
            marksQuantity += 1;
          }
          return sum;
        }, 0);
      }
      if (!marksQuantity) return 0;
      return (marksSum / marksQuantity).toFixed(1);
    };

    Student.prototype.summary = function () {
      const averagePresence = this.getAveragePresence();
      const averageMark = this.getAverageRate();
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

  const Volodymyr = new Student("Volodymyr", "Samoluk", 1994);
  Volodymyr.absent();
  Volodymyr.present(10);
  Volodymyr.absent();
  Volodymyr.present(10);
  Volodymyr.present(10);
  Volodymyr.absent();
  Volodymyr.present(10);
  Volodymyr.present(10);
  Volodymyr.present(10);
  Volodymyr.absent();

  console.log(Volodymyr.getAge());
  console.log(
    `Average presence of ${Volodymyr.firstName} ${
      Volodymyr.lastName
    } is ${Volodymyr.getAveragePresence()}`
  );
  console.log(
    `Average mark of ${Volodymyr.firstName} ${
      Volodymyr.lastName
    } is ${Volodymyr.getAverageRate()}`
  );
  console.log(Volodymyr.summary());
})();
