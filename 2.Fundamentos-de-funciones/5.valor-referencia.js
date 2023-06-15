/*un argumento puede ser pasado como valor o como referencia

cualquier argumento que no sea un objeto o array es tomado como valor

y dentro de la funcion se crea una copia de la variable global
*/

let edades = [18];

function modificar(edades) {
    edades[0] = 19;
    console.log(edades)
}

console.log(edades);
modificar(edades);
console.log(edades);

/* si es un objeto o un array el valor si puede cambiar */
