// async retorna esto internamente -> Promise.resolve()

async function suma(a, b) {
    return a + b;
}

async function calcular() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,400,5)
    })
}