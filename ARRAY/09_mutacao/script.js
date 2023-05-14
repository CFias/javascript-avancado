let pessoa = {
    nome: 'Cleidson Fias'
};

let pessoa1 = pessoa;

let pessoa3 = {
    nome: 'Cleidson Fias'
};

console.log(pessoa1 == pessoa);
console.log(pessoa1);

console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa1);

console.log(pessoa3);

pessoa1.nome = 'Milena';

console.log(pessoa);
console.log(pessoa1);

// Sempre que um objeto é clonado, qualquer mudança feita no antigo ou no novo será para os dois objetos