let pessoa = {
    "nome": "Cleidson Fias",
    "idade": 24,
    "hobbies": ["Futebol", "Estudos", "Jogos"]
};

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson.hobbies[1]);