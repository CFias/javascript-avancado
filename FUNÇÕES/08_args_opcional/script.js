function soma (a,b) {
    if (a === undefined || b === undefined) {
        console.log("Você precisa preencher todos os campos para prosseguir.");
    } else {
        return a + b;
    }
};

console.log(soma(1));

console.log(soma(1,4));


function saudacao(nome, idade) {
    if (idade === undefined) {
        console.log(`Olá, ${nome}`);
    } else {
        console.log(`Olá, ${nome}! Você tem ${idade} anos de idade.`);
    }
}

saudacao("Cleidson");

saudacao("Cleidson Fias", 24);