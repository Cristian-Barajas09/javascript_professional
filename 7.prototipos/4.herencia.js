function Course(title) { this.title = title }
Course.prototype.inscribir = function () { console.log("inscribir") }
// let javascript = new Course("curso de javascript")

// let python = Object.create(javascript);

// python.title ="curso de python";

// console.log(javascript.title);
// console.log(python.title);


function LiveCourse(date) {
    this.published_at = date
}

LiveCourse.prototype = Object.create(Course.prototype)
//__proto__ : Course.prototype
let javascript = new LiveCourse(new Date());

javascript.inscribir();

console.log(javascript);

/*
En resumen:

en javaScript la herecia de prototipos funciona al incluir el prototype de una clase en la cadena de prototipos de un objeto

un objeto puede heredar de otro si lo usamos como primer argumento de Object.create

una funcion constructora puede heredat de otra si usamos el prototype de la clase base como primer argumento de Object.create y asignamos ese resultado al prototype de la clase hija

*/

