/*
el prototype es un objeto asociado a cualquier funcion
donde cada funcion incluye un propiedad prototype y funciona para compartir codigo
*/

function Course(param) { }

// console.log(Course.prototype)

Course.prototype.inscribir = function () {
    console.log("Hola!");
}

let course = new Course()
course.abandonar = function () {
    console.log("abandonar");
}
course.inscribir();

console.log(course.toString());

/*
1. crea un nuevo objeto en blanco
2. se ejecuta
3. se asocia el prototype de la funcion constructora con el nuevo objeto creado
*/

/*
cadena de prototipos

se refiere a que hay varios prototipos en lazados a prototipos


*/