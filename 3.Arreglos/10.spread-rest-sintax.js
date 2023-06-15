//iterable

//spread syntax (...)

let arreglo = [1,2,3];
let nombre = "cristian";

// console.log(nombre);
// console.log(...nombre); //el spread los expande en elementos

//rest parameters (...) unifica elementos

function promedio(nombre,...calificaciones) {
    console.log(nombre,...calificaciones)
}

promedio("cristian",1,2,3,4,5,6,7);