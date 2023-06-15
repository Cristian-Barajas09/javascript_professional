class User{
    get nombre(){return this._nombre.charAt(0).toUpperCase() + this.nombre.slice(1);} //obtener o leer el valor de una propiedad
    set nombre(nombre){
        if(typeof nombre !== "string") throw new Error("no es una cadena");
        this._nombre = nombre;
    }//se usa asignar un valor nuevo a una propiedad
}


let user = new User();

// console.log(user.nombre); //asi se llama getter
user.nombre = "Alejandro"//asi se llama setter
console.log(user.nombre);
