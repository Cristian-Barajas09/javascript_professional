// +
let a = "hola";
let b = "mundo";
console.log("hola " + "mundo");

console.log(a.concat(b));

//Templete literals -> templete string
let name = "cristian"
let templete = `hola ${name} como estas`;

console.log(templete)

//1-9 -> 01
//10-12 -> 11

let mes = "8";

console.log(mes.padStart(2,"0"));
console.log(mes.padEnd(2,"0"));
