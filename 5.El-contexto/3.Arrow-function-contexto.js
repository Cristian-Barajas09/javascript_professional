/*
    -Tienen una sintaxis mas corta que la declaricion con function
    -Heredan el  valor this del contexto  en el que fueron creadas, y no se reasigna
*/

// let estudiante = {
//     nombre:"cristian",
//     saludar: ()=> {console.log("hola soy " + this.nombre);},
//     saludarAlt: function(){console.log("hola soy " + this.nombre);}
// }

// estudiante.saludar();//undefined

// estudiante.saludarAlt(); //"cristian"

function Estudiante(){
    this.nombre = "cristian"
    this.saludar = ()=> console.log("hola " + this.nombre)
}

let e = new Estudiante();

setTimeout(e.saludar,100);

/* arrow function adopta el contexto en la creacion y no en la ejecucion */