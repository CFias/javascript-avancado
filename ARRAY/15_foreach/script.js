const nomes = ["Cleidson", "Milena", "Celia", "Everaldo", "Claise"];

nomes.forEach(nome => {
    console.log(`Seu nome é ${nome}`)
});

const cidades = ["Salvador", "Lauro de Freitas", "Simões Filho"];

cidades.forEach(cidade => {
    if(cidade == "Salvador") {
        console.log(`Você é de SSA`)
    } else if (cidade == "Lauro de Freitas") {
        console.log(`Lauro é uma boa cidade!`)
    } else {
        console.log("Simões City")
    }
});