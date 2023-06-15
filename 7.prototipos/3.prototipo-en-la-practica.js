function Course(param) {  }

Course.prototype.inscribir = function () {
    console.log("ya llegue");
}
Course.prototype.conteo = 0;
Course.prototype.inscribir = function () {
    console.log("ya llegue v2");
}
Course.prototype.otro = function(){
    console.log("🙂");
}
let javascript = new Course();
javascript.__proto__.conteo += 1;
let python = new Course();
python.__proto__.conteo += 1;

/*__proto__ este objeto apunta al prototipo
de la funcion constructora con la que se produjo el objeto
*/
javascript.otro();

python.inscribir();

console.log(Course.prototype.conteo);

