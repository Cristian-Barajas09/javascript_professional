/*
una expresion regular se puede utilizar
en 8 posibles metodos 2 son de la clase regex y el resto son objeto string
*/

let texto = "hola mi nombre es cristian barajas y tengo 18 y soy naci en el 2004"

console.log(texto.search(/\d/));//\d representa cualquier digito. Si devuelve -1 no esta

console.log(texto.match(/(\d+)/g)); //match retorna un arreglo y matchall devuelve un iterador

// \g -> la bandera g retorna todas las ocurrencias

//el + se refiere a uno o mas caracteres

let it = texto.matchAll(/(\d+)/g);

for(let instacia of it){
    console.log(instacia);
}