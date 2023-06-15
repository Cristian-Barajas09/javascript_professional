/*
scope global se puede acceder a ella en todo el codigo
scope local esta solo se puede acceder a ella en su bloque
*/

var nombre = "jesus"

function decirHola(){
    var nombre = "cristian"
    console.log("Hola" + nombre)
/*
 las variables tiene una vida util es decir al finalizar de la funcion se destrulle la variable
*/
}

decirHola();

console.log(nombre);

/*
se pueden declar variables sin var,let, const
pero al hacer esto pasa a ser del scope global
*/