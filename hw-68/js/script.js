const student = { name: 'Дмитро Коцюбайло' };
 const grades = { math: 90, fiz: 85, eng: 95 };

 (function (){
      function saveGrades(person, grades){
       const studentData = new WeakMap
       studentData.set(person, grades)
       return studentData
      }
     console.log(saveGrades(student, grades));
 }) ()

