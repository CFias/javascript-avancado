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
let patas = Symbol();


Cachorro.prototype.raca = ' SRD ';
Cachorro.prototype[patas] = 4;

console.log(labrador.patas);
console.log(labrador.raca);

// como acessar o Symbol
console.log(Cachorro.prototype[patas]);
console.log(labrador[patas]);

labrador.latir();

console.log('\n SEPARADOR \n ')

console.log(Cachorro.prototype.raca);