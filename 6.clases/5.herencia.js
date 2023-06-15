// class Human{
//     especie = "Humano"
//     respirar(){ console.log("inhala")}
// }

// class Admin extends Human{}

// let admin = new Admin();

// console.log(admin.especie);
// admin.respirar();

// class Player{
//     play() {this.video.play();}
//     duration(){return this.video.duration / 100}
// }

// class Video extends Player{
//     open(){this.redirectToVideo(this.video)}
// }

// class Youtube extends Player{
//     open(){this.redirectToYoutube(this.video)}
// }

class User{
    constructor(name){
        this.name = name
    }
    saludar(){console.log("hola usuario"); }
}

class Admin extends User{
    constructor(name){
        super(name);
    }
    saludar(){
        super.saludar();
        console.log("hola soy admin");
    }
}

let admin = new Admin("cristian");

admin.saludar();

console.log(admin.name)