class Veiculo {
    constructor(tipo, marca, modelo, ano) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
};

let hondaFan = new Veiculo('Moto', 'Honda', 'Fan 125i', '2018');
console.log(hondaFan);

class Carro extends Veiculo {
    constructor(tipo, marca, modelo, ano, rodas) {
        super(tipo, marca, modelo, ano) // altera o valor pai
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.rodas = rodas;
    }
    ligarVeiculo () {
        console.log('Motor ligado!');
    }
};

let fordKa = new Carro('Carro', 'Ford', 'Ka', '2022', 4);
console.log(fordKa);

fordKa.ligarVeiculo();

console.log(new Carro instanceof Veiculo);
console.log(fordKa instanceof Veiculo);
console.log(fordKa instanceof Carro);