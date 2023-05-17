class Carro {
    constructor(marca,modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    ligarCarro() {
        console.log('Carro ligado!');
    }
};

Carro.prototype.cor = 'Preto';

let FordKa = new Carro('Ford','Ka');

console.log(FordKa);

FordKa.ligarCarro();