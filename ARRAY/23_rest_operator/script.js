let nome = 'Cleidson';
let nome1 = 'Ramos';
let nome2 = 'Fias';
let idade = 24;

function imprimirNomes (...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
};

imprimirNomes(nome);
imprimirNomes(nome1);
imprimirNomes(nome2);
imprimirNomes(idade);
imprimirNomes(2,3,1,5,23,5,23,4,234,5,46,42,3423,42,34,234,2,34,3425,23,4,2);