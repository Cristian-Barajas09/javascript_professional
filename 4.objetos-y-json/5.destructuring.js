let user = { name: "cristian", edad: 18, nacionalidad: "Venezolano" };

let { name } = user;

// console.log(name);

let { edad: age, apellido = "Barajas", ...sobrantes } = user;

// console.log(age, apellido)
// console.log(sobrantes)

function saludar({ name }) {
    console.log(name);
};

saludar(user);

let calificacion = [10, 9, 8];

// let [matematicas, ...otras] = calificacion;

// console.log(matematicas);
// console.log(otras);


function suma([v1, v2]) {
    console.log(v1 + v2);
}

suma([10, 20]);

function obtenerCalificaciones() {
    return [10, 9, 8];
}

let [nota1,...otras] = obtenerCalificaciones();

console.log(nota1,otras);