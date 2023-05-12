function tipoDeDados(dado) {
    if (typeof dado === 'string') {
        console.log("Esse é um exemplo de String")
    } else if (typeof dado === 'boolean') {
        console.log("Esse é um exemplo de Boolean")
    } else if (typeof dado === 'number') {
        console.log("Esse é um exemplo de Number")
    }
}

tipoDeDados("Fias");
tipoDeDados(24);
tipoDeDados(25 > 24)