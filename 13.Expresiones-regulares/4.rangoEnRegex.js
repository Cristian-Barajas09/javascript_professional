// /[abcd]/ //->   esto hace match con los caracteres encontrados
// /abc/ // todos juntos en ese mosmo orden

// console.log("abcd".match(/[abcd]/))
// console.log("abcd".match(/abcd/))
// console.log("b".match(/[abcd]/))
// console.log("b".match(/abcd/)) //-> tiene que hacer match con todos los caracteres para poder funcionar

// console.log("a".match(/a|b/));

let texto = "Hola";

// console.log(texto.match(/H[ol]a/));

console.log("b".match(/[a-d]/));
console.log("3".match(/[0-5]/));
console.log("-".match(/[-0]/));

// /[abc]/
// /[a-b]/ -> rango

//\d es igual a decir el rango de [0-9] es decir cualquier digito
//\w es igual a decir el rango [a-zA-Z0-9] y representa cualquier digito cualquier letra o guiones bajos