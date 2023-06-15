let user = {
    edad:20,
    nombre:"cristian"
};
let esquemaPermisos = {nivel:2}

let admin = {...user,...esquemaPermisos,nombre:"alejandro"};

// console.log(admin);

//si usa metodos accesores
let copia = Object.assign(user,esquemaPermisos,{permisos:true},{nivel: 2});

console.log(copia);