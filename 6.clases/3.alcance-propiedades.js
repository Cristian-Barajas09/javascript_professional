class Curso {
    #title = "Javascript";
    constructor(){
        this.#bienvenido()
    }
    #bienvenido(){
        console.log("Bienvenido al curso: " + this.#title)
    }
}

let Javascript = new Curso();

