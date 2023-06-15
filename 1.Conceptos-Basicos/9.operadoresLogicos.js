/*
&& and (si alguno de los valores es false dara false)
|| or (si alguno de los valores es true dara true)
! negacion o not si es true pasara a ser false
?? fusion de nulos o union nulosa
*/

20 && 10;

console.log(true && false);

let edad = 18;

console.log(edad > 18 && edad < 20);

console.log(10 && 0); //busca el primer valor falsy y lo devuelve

console.log(20 && 5 && false)//y cuando no encuetra el valor falsy devuelve truthy

//Or
console.log(true || false);

//si encuentra que una de las variables es true no le para bolas a las siguientes

//Not

console.log(!false);

// operador de nullish coalescing

console.log(null ?? "hola");

//si la expresion de la izquierda es nula retorna la de la derecha

