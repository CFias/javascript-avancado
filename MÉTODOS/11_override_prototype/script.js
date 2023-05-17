class Cachorro {
    constructor(raca,cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log('Rau Rau');
    }
};

let labrador = new Cachorro('Labrador', 'Preto');

Cachorro.prototype.raca = ' SRD ';
Cachorro.prototype.patas = 4;

console.log(labrador.patas);
console.log(labrador.raca);
labrador.latir();

console.log('\n SEPARADOR \n ')

console.log(Cachorro.prototype.raca);