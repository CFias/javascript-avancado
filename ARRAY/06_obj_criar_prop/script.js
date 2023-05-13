let pessoa = {
    nome: 'Cleidson Fias',
    idade: 24,
    profissao: 'Programador',
    cnh: true
};

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

pessoa.nome = 'Milena Santana';

console.log(pessoa.nome);