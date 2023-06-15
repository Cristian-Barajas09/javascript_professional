function hola(nombre) {
    if (nombre) {
        let saludo = "hola " + nombre
    }
    console.log(saludo);
}

hola("cristian");

/*
si es var la variable pasa a ser del bloque de funcion
si es let,const este pasa a ser solo del bloque mas cercano
*/