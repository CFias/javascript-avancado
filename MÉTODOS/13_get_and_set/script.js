class Cachorro {
    constructor(raca,cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log('Rau Rau');
    }
    get getCor() {
        return this.cor;
    }
    set setCor(cor) {
        this.cor = cor;
    }
};

let pastorAlemao = new Cachorro('Pastor Alemão', 'Sem cor definida');

console.log(pastorAlemao);

pastorAlemao.setCor = 'Marrom';

console.log(pastorAlemao.getCor);

