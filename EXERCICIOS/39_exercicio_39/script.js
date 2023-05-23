class Carro {
    constructor(marca,cor,gasolinaRestante,consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigirCarro(km) {
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(l) {
        this.gasolinaRestante += l;
    }

}

let carro = new Carro("Chevrolet", "Onix", 100, 17);
console.log(carro);

carro.dirigirCarro(600);
console.log(carro);

carro.abastecer(20);
console.log(carro);
