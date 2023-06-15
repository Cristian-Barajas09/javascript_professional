/*
    las clases en javascript no existen, javascript es un lenguaje orientado  a objeto pero basado a prototipos
*/
//declaracion
class Curso{
    constructor(titulo){
        this.titulo = titulo;
    }
    inscribir(){
        console.log("inscrito")
    }
}
//expresion
// let Curso = class{

// }

let javascript = new Curso("curso profesional de javascript")

console.log(javascript.titulo)
javascript.inscribir()