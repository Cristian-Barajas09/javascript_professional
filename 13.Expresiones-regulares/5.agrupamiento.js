//recordar parte de un patron por separado
//aplicar cuantificadores por separado

/(\d-)*/

// console.log("123--3-2-".match(/(\d-)+/g))

console.log("texto@domain".match(/(?<username>\S+)@\S+/))
console.log("texto@domain".match(/(?:\S+)@\S+/))

// ?<username> para asignar nombre a los grupos

//* cero o muchos y hace match con cualquier instancia
//- cualquier cantidad de guiones o digitos
//+ apartir de uno en adelante