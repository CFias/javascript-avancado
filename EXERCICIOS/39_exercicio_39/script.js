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


class Veiculo {
    constructor(marca, modelo, combustivel, consumo) {
        this.marca = marca;
        this.modelo = modelo;
        this.combustivel = combustivel;
        this.consumo = consumo;
    }

    dirigir(km) {
        let litros = km / this.consumo;
        this.combustivel -= litros;
    }

    abastecer(l) {
        this.combustivel += l;
    }
};

let veiculo = new Veiculo('VW', 'Voyage', 100, 17);
console.log(veiculo);

veiculo.dirigir(30);
console.log(veiculo);

veiculo.abastecer(40)
console.log(veiculo);