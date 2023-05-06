let idade = 24;

if (idade > 18){
    console.log("Você é maior de idade.");
}

if (idade > 25){
    console.log("Bloco executado.");
}

let nome = "Cleidson Fias";

if (nome == "Cleidson Fias" && idade > 18){
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}

let passaporte = true;

if ((nome === "Cleidson Fias" && idade > 18) || passaporte == true) {
    console.log(`Olá, ${nome}! Você tem ${idade} anos de idade.`);
}