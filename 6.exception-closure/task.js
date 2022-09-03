//Задача 1
function parseCount (Number) {
    if (isNaN(parseInt(Number))) {
       throw new Error("Невалидное значение");  
    } else {
       return parseInt(Number);
    }
 }
 
 function validateCount (Num) {
 try {
    return parseCount (Num);
     }
 catch (err) { 
    return err;
   }
 }


 //Задача 2
 class Triangle {
    constructor (a, b, c) {
        if ((a > (b + c)) || (b > (a + c)) || (c > (a + b))) {
            throw new Error("Треугольник с такими сторонами не существует")  
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    getPerimeter () {
        return (this.a + this.b + this.c);
    }
    getArea () {
        let p = this.getPerimeter()/2;
        //let p = (this.a + this.b + this.c)/2;
        let s = +((p * (p - this.a) * (p - this.b) * (p - this.c)) ** (1 / 2)).toFixed(3);
        return s;
    }
}
class Triangle2 {   
    getArea () {
        return "Ошибка! Треугольник не существует";}
    getPerimeter () {
        return "Ошибка! Треугольник не существует";

    }
}

function getTriangle (side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    }
    catch (e) {
        return new Triangle2();
    }
}

