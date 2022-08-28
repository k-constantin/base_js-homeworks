//Задача 1
class PrintEditionItem {
    _state = 100;
    type = null;
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }
    set state(health) {
        if (health < 0) {
            this._state = 0;
        } else if (health > 100) {
            this._state = 100;
        } else {
            this._state = health;
        }
    }
    get state() {
        return this._state
    }
       
    fix() {
        this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
    }
    type = "magazine";
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author; 
    }  
    type = "book"; 
} 

class NovelBook extends Book {
        type = "novel";
}

class FantasticBook extends Book {
        type = "fantastic";
}

class DetectiveBook extends Book {
        type = "detective";
}



//Задача 2
class Library {
    books = [];
    constructor(name) {
        this.name = name;
      }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        } 
    }
    findBookBy(type, value) {
        let result = this.books.findIndex(item => item[type] === value );
        if (result === -1) {
            return null;
        } else {
            return this.books[result];
        }
    }
    giveBookByName(bookName) {
        let result = this.books.findIndex(item => item.name === bookName );
        if (result === -1) {
            return null;
        } else {
            let book1 = this.books[result];
            this.books.splice([result],[1]);
            return book1;   
        }  
    }
}



//Задача 3
class Student {
    marks = {};
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    addMark(mark, subject) {
        if (mark < 1 || mark > 5) {
          return "Ошибка, оценка должна быть числом от 1 до 5";
        } else if (this.marks[subject] != undefined) {
            this.marks[subject].push(mark);
        } else {
            this.setSubject(subject);
            this.marks[subject].push(mark);
        }
      }

    setSubject(subjectName) {
        this.marks[subjectName] = [];
      }
    getAverageBySubject(subject) {
        if (this.marks[subject] != undefined) {
            let result = this.marks[subject].reduce((sum, current) => sum + current, 0);
            return (result / this.marks[subject].length);
        } else {
            return "Несуществующий предмет";
        }
        
    }
    getAverage() {
        let long = 0;
        let summa = 0;
        for (let key in this.marks) {
            summa += this.marks[key].reduce((sum, current) => sum + current, 0);
            long += this.marks[key].length;
        }
        return summa / long;
    }
    exclude(reason) {
        delete this.marks;
        this.excluded = reason;
        return reason;
      }
}



