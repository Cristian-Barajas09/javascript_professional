//Funcion pura: no produce efectos secundarios
let edades = [18];

function modificar(edades) {
    let copia = [...edades]//generar copia de un arreglo
    copia[0] = 19; //modificar la copia y no el valor original
    return copia; //para comunicar los cambios con el exterior
}

console.log(edades);
modificar(edades);
console.log(edades);
