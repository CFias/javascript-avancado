const pessoa = {
    maos: 2,
};

// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

// console.log(pessoa.hasOwnProperty('maos'));


const carro = {
    portas: 4
};

console.log(Object.getPrototypeOf(carro));
console.log(Object.getPrototypeOf(carro) === Object.prototype);

const carroNovo = Object.create(carro);
console.log(carroNovo.portas);
console.log(carroNovo.hasOwnProperty('portas'));

console.log(Object.getPrototypeOf(carroNovo) === carro);