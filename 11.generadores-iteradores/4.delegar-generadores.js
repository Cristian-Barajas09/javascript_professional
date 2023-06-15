function* counter(){
    for (var i = 1;i<=5;i++){
        yield i;
    }
}

function* retornador(){
    yield* counter();
    console.log("regrese");
}

let generator = retornador();

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())




