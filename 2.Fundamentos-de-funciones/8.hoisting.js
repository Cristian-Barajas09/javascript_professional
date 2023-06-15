/*hoisting
las variables y las funciones pueden ser utilizadas incluso antes de ser declaradas

solo aplica con las variables declaradas con var o con las funciones
*/

// console.log(x); //undefined

// var x = 10;

// console.log(x); // 10

// function demo(){
//     var x;
//     console.log(x);
// }
// demo();

console.log(suma(2,2));

function suma(a,b) { return a + b }
