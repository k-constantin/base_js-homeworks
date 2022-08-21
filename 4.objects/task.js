function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks[0] = mark; 
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = mark; 
    } else {
      for (let i = 0; i < mark.length; i++) {
        this.marks.push(mark[i]);
      }
      
    }
  }

  Student.prototype.getAverage = function () {
    if(this.marks === undefined){ 
      return "Нет оценок";
      } else {
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++) {
          sum += this.marks[i];
        }
        return (sum / this.marks.length);
      }
  }

  Student.prototype.exclude = function (reason){
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
  