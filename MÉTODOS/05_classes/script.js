const carro = {
    placa: ' undefined! ',
    ligar: function() {
        console.log('Carro ligado!');
    }
};

const carroOnix = Object.create(carro);

carroOnix.ligar();

carroOnix.placa = 'MCF 2111';

console.log(carro.placa);
console.log(carroOnix.placa);

const bmw = Object.create(carro);

bmw.ligar()