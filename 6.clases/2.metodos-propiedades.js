class Curso{
    titulo = "hola";
    inscribir(nombre){
        this.nombre = nombre
    }
}

let c = new Curso()
c.inscribir("cristian")

console.log(c.nombre)