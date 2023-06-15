function Estudiante(){
    this.nombre = "cristian";
    this.saludar = function () { console.log(this,arguments) }
    this.saludar = this.saludar.bind(this);
}

let e = new Estudiante()

e.saludar()

let f = e.saludar;

f();


/*
    los que ejecutan la funcion de manera inmediata: call y apply
    Lazy (los que construyen una funcion para despues ejecutarla) :bind
*/

// e.saludar.call({},"1","3");

// e.saludar.apply({},["1","3"]);

// let nuevaFuncion = e.saludar.bind({});

// nuevaFuncion();