function* counter(){
    return 3;//es como mandar a llamar yield pero terminara el iterador
}

let generator = counter();

console.log(generator.next())


