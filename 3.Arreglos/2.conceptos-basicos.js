let arreglo = ["react","express","django",1,{},function(){},[1,2,3]];

// arreglo[0] = "angular";

let resultado = arreglo.push(3); //agrega el elemento al final del arreglo y retorna la nueva longitud

arreglo.unshift(1); //añade elementos al principio

let elimina = arreglo.pop(); //elemina el ultimo elemento y retorna el mismo
let elimina2 = arreglo.shift(); //elimina el  primer elemento y retorna el mismo

console.log(   arreglo  );
console.log(   elimina  );
console.log(   elimina2  );
console.log(resultado);