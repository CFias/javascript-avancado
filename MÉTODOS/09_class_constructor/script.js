class Cachorro {
    constructor(raca,cor,qtd) {
        this.raca = raca;
        this.cor = cor;
        this.qtn = qtd;
    }
};

Cachorro.prototype.latir = function() {
    console.log('Au Au Au');
};

let viraLata = new Cachorro('Vira Lata', 'Preto e Branco', 5);
console.log(viraLata);

viraLata.latir();