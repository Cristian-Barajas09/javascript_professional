/*esto se ejecuta de manera inmediata a penas se instancia la clase*/

class Curso{
    constructor(titulo,color="yellow"){
        this.titulo = titulo
        this.color = color
    }
}

let javascript = new Curso("curso profesional de javascript")

console.log(javascript.color)